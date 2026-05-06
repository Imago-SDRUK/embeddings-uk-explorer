// Service Worker: bypass Firefox's HTTP 206 partial-response caching bug.
//
// Firefox incorrectly caches 206 (Partial Content) responses from CDNs that
// set ETag + Cache-Control: max-age. When DuckDB-WASM's HTTPFS makes a second
// Range request to the same URL, Firefox serves the first cached fragment
// instead of the requested byte range, corrupting parquet reads.
//
// cache:'no-store' prevents Firefox from storing OR serving cached responses
// for that request. A Service Worker is the only place this can be applied
// to requests from inside a Web Worker (like the DuckDB WASM worker), since
// patching self.fetch in the worker does not reach DuckDB's internal HTTPFS.

self.addEventListener("install", () => self.skipWaiting());

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", (event) => {
  if (event.request.headers.has("Range")) {
    event.respondWith(
      fetch(new Request(event.request, { cache: "no-store" })),
    );
  }
});
