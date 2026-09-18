// ==========================================================================
// El Guasimal · Dev Server
// Serves static files with SPA fallback + live reload
// ==========================================================================

import { file, serve } from "bun";
import { join } from "path";

const PORT = 3000;
const PUBLIC = join(import.meta.dir, "public");

const server = serve({
  port: PORT,
  async fetch(req) {
    const url = new URL(req.url);
    const pathname = url.pathname;

    // Try to serve the file directly
    const filePath = join(PUBLIC, pathname);
    const f = file(filePath);
    if (await f.exists()) {
      return new Response(f);
    }

    // SPA fallback: serve index.html for all routes
    return new Response(file(join(PUBLIC, "index.html")), {
      headers: { "Content-Type": "text/html" },
    });
  },
});

console.log(`🧟 El Guasimal dev server running at http://localhost:${server.port}`);
