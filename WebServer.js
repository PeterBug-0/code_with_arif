const http = require("http");
const { join, extname, resolve } = require("path");
const { readFile } = require("fs");

const PUBLIC_DIR = join(__dirname, "public");

const mimeTypes = {
  ".html": "text/html",
  ".css": "text/css",
  ".png": "image/png",
  ".js": "text/javascript",
};

const server = http.createServer((request, response) => {
  const pathname = new URL(request.url, "http://localhost").pathname;
  const url = pathname === "/" ? "/index.html" : pathname;

  const filePath = resolve(join(PUBLIC_DIR, url));

  // Path traversal guard — reject anything that escapes public/
  if (!filePath.startsWith(PUBLIC_DIR)) {
    response.writeHead(403, { "Content-Type": "text/plain" });
    response.end("Forbidden");
    return;
  }

  const ext = extname(filePath).toLowerCase();
  const contentType = mimeTypes[ext] || "application/octet-stream";

  readFile(filePath, (error, file) => {
    if (error) {
      readFile(join(PUBLIC_DIR, "404.html"), (err, notFoundPage) => {
        response.writeHead(404, { "Content-Type": "text/html" });
        response.end(err ? "404 Not Found" : notFoundPage, "utf-8");
      });
      return;
    }
    response.writeHead(200, { "Content-Type": contentType });
    response.end(file, "utf-8");
  });
});

server.listen(3001, () => console.log("Server is listening on port 3001"));
