// const http = require('http');

// const server = http.createServer((req, res) => {
//   console.log(req.url, "=================>"); 

//   if (req.url === "/") {
//     res.writeHead(200, { "Content-Type": "text/html" });
//     return res.end("<h1>Welcome to the Home Page</h1>");
//   }

//   else if (req.url === "/login") {
//     res.writeHead(200, { "Content-Type": "text/html" });
//     return res.end("<h1>Login Page</h1>");
//   }


//   else {
//     res.writeHead(404, { "Content-Type": "text/html" });
//     return res.end("<h4>404 Not Found</h4>");
//   }
// });

// server.listen(3000, () => {
//   console.log("Server running on port 3000");
// });


const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req, "requst server");
  res.end("Done");
})
server.listen(3000, () => {
  console.log("Server running on port 3000");
});