import type { NextConfig } from "next";

/**
 * Aucun `remotePatterns` : toutes les photographies sont servies depuis
 * /public/photos. Wikimedia demande de ne pas pointer directement sur
 * upload.wikimedia.org depuis un site en production — les fichiers sont donc
 * copiés localement, avec leur crédit dans src/data/photos.ts.
 */
const nextConfig: NextConfig = {};

export default nextConfig;
