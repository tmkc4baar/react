// server.js

// Import the built-in HTTP module
const http = require("http");

// Create the server
const server = http.createServer((req, res) => {
  res.statusCode = 200; // OK response
  res.setHeader("Content-Type", "text/html");

  // Simple routing
  if (req.url === "/") {
    res.end("<h1>Welcome to My Node.js HTTP Server</h1>");
  } else if (req.url === "/about") {
    res.end("<h1>About Page - Created using Node.js</h1>");
  } else if (req.url === "/contact") {
    res.end("<h1>Contact Us at: example@email.com</h1>");
  } else {
    res.statusCode = 404;
    res.end("<h1>404 - Page Not Found</h1>");
  }
});

// Define port number
const PORT = 3000;

// Start the server
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});