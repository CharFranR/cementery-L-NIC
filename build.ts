// ==========================================================================
// El Guasimal · Build Script
// Bundles TypeScript → dist/ for GitHub Pages deployment
// ==========================================================================

import { $ } from "bun";

const DIST = "dist";

// Clean dist
await $`rm -rf ${DIST}`;
await $`mkdir -p ${DIST}/assets/img ${DIST}/docs`;

// Bundle TypeScript → JavaScript
const result = await Bun.build({
  entrypoints: ["./src/main.ts"],
  outdir: "./dist/assets",
  minify: true,
  sourcemap: "none",
  naming: "app.js",
});

if (!result.success) {
  console.error("Build failed:");
  for (const log of result.logs) {
    console.error(log);
  }
  process.exit(1);
}

console.log("✓ Bundled src/main.ts → dist/assets/app.js");

// Copy public/ → dist/
await $`cp -r public/* ${DIST}/`;

// Copy docs if they exist
const docsDir = Bun.file("docs/RESULTADOS DEL ESTUDION ARQUITECTONICO.pdf");
if (await docsDir.exists()) {
  await $`cp -r docs ${DIST}/`;
}

console.log("✓ Copied static assets to dist/");
console.log(`✓ Build complete → ${DIST}/`);
