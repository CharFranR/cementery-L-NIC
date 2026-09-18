import { file, serve } from "bun";
import { join } from "path";

const PORT = 4173;
const DIST = join(import.meta.dir, "dist");

const server = serve({
  port: PORT,
  async fetch(req) {
    const url = new URL(req.url);
    const pathname = decodeURIComponent(url.pathname);

    // Try to serve the file directly
    const filePath = join(DIST, pathname);
    const f = file(filePath);

    if (await f.exists()) {
      return new Response(f);
    }

    // SPA fallback: serve index.html for all routes
    return new Response(file(join(DIST, "index.html")), {
      headers: { "Content-Type": "text/html" },
    });
  },
});

console.log(`🧟 El Guasimal preview running at http://localhost:${server.port}`);
