const http = require("http");
const url = require("url");
const fs = require("fs");

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");
const dataObj = JSON.parse(data);

const server = http.createServer((req, res) => {
  const pathName = req.url;

  if (pathName === "/overview" || pathName === "/") {
    res.end("This is the overview");
  } else if (pathName === "/product") {
    res.end("This is the products");
  } else if (pathName === "/api") {
    res.writeHead(200, { "Content-type": "application/json" });
    res.end(data);
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<h1>page not found</h1>");
  }

  //   res.end("Hello world");
});
server.listen(8000, "127.0.0.1", () => {
  console.log("Listening on port 8000");
});
