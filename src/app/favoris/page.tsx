import type { Metadata } from "next";

import { FavorisListe } from "./favoris-liste";

export const metadata: Metadata = {
  title: "Vos favoris",
  description: "Les biens que vous avez mis de côté.",
};

export default function FavorisPage() {
  return (
    <section
      style={{
        maxWidth: 1280,
        margin: "0 auto",
        padding: "clamp(56px, 6vw, 88px) clamp(20px, 4vw, 40px) clamp(80px, 8vw, 120px)",
      }}
    >
      <h1 style={{ fontSize: "clamp(44px, 6vw, 80px)", lineHeight: 1.02 }}>
        Vos favoris
      </h1>
      <FavorisListe />
    </section>
  );
}
