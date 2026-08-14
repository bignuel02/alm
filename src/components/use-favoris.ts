"use client";

import { useSyncExternalStore } from "react";

import {
  getServerSnapshot,
  getSnapshot,
  subscribe,
  toggleFavori,
} from "@/lib/favoris-store";

export function useFavoris() {
  const refs = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  return {
    refs,
    count: refs.length,
    has: (ref: string) => refs.includes(ref),
    toggle: toggleFavori,
  };
}
