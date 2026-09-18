import { cp, mkdir, rm } from "node:fs/promises";

const DIST = "dist";

// Clean dist
await rm(DIST, { recursive: true, force: true });
await mkdir(`${DIST}/assets/img`, { recursive: true });
await mkdir(`${DIST}/docs`, { recursive: true });

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
await cp("public", DIST, { recursive: true });

// Copy docs if they exist
const docsDir = Bun.file("docs/RESULTADOS DEL ESTUDION ARQUITECTONICO.pdf");
if (await docsDir.exists()) {
  await cp("docs", `${DIST}/docs`, { recursive: true });
}

console.log("✓ Copied static assets to dist/");
console.log(`✓ Build complete → ${DIST}/`);