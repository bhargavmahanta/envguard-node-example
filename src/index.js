import { createServer } from "node:http";

const port = Number.parseInt(process.env.PORT ?? "3000", 10);

createServer((_request, response) => {
  response.writeHead(200, { "content-type": "application/json" });
  response.end(JSON.stringify({ ok: true, protectedBy: "EnvGuard" }));
}).listen(port, () => {
  console.log(`Example server listening on http://localhost:${port}`);
});
