/**
 * Favourites, kept in localStorage.
 *
 * Exposed as an external store so components read it through
 * `useSyncExternalStore`: no state mirroring, no setState-in-effect, and
 * cross-tab changes land on their own via the `storage` event.
 */

const STORAGE_KEY = "alassani.favoris";
const EMPTY: readonly string[] = Object.freeze([]);

const listeners = new Set<() => void>();

/** Snapshots must be referentially stable, so parse results are memoised
    against the raw string they came from. */
let cachedRaw: string | null | undefined;
let cachedValue: readonly string[] = EMPTY;

function parse(raw: string | null): readonly string[] {
  if (!raw) return EMPTY;
  try {
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return EMPTY;
    const refs = parsed.filter((r): r is string => typeof r === "string");
    return refs.length ? refs : EMPTY;
  } catch {
    return EMPTY;
  }
}

function emit() {
  for (const listener of listeners) listener();
}

export function subscribe(listener: () => void): () => void {
  listeners.add(listener);
  window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(listener);
    if (listeners.size === 0) window.removeEventListener("storage", onStorage);
  };
}

function onStorage(event: StorageEvent) {
  if (event.key === null || event.key === STORAGE_KEY) emit();
}

export function getSnapshot(): readonly string[] {
  let raw: string | null = null;
  try {
    raw = window.localStorage.getItem(STORAGE_KEY);
  } catch {
    // Private mode or blocked storage — behave as if nothing is saved.
  }
  if (raw === cachedRaw) return cachedValue;
  cachedRaw = raw;
  cachedValue = parse(raw);
  return cachedValue;
}

/** Server render (and the hydration pass) sees an empty list. */
export function getServerSnapshot(): readonly string[] {
  return EMPTY;
}

export function toggleFavori(ref: string) {
  const current = getSnapshot();
  const next = current.includes(ref)
    ? current.filter((r) => r !== ref)
    : [...current, ref];
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  } catch {
    // Can't persist — still notify so the UI reflects the click this session.
  }
  emit();
}
