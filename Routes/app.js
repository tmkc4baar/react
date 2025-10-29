// Import express module
const express = require("express");
const app = express();
const PORT = 3000;

// Middleware to parse JSON data
app.use(express.json());

// Home Route
app.get("/", (req, res) => {
  res.send("<h2>Welcome to My Express App 🚀</h2>");
});

// About Route
app.get("/about", (req, res) => {
  res.send("<h3>This is the About Page. Built using Express.js.</h3>");
});

// Contact Route
app.get("/contact", (req, res) => {
  res.send("<h3>Contact us at: support@example.com</h3>");
});

// Product Route with Parameters
app.get("/product/:id", (req, res) => {
  const productId = req.params.id;
  res.send(`<h3>Showing details for Product ID: ${productId}</h3>`);
});

// POST Route Example
app.post("/add-user", (req, res) => {
  const { name, email } = req.body;
  res.send(`<h3>User Added Successfully: ${name} (${email})</h3>`);
});

// PUT Route Example
app.put("/update-user/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  res.send(`<h3>User ${id} updated successfully with name: ${name}</h3>`);
});

// DELETE Route Example
app.delete("/delete-user/:id", (req, res) => {
  const { id } = req.params;
  res.send(`<h3>User with ID ${id} deleted successfully!</h3>`);
});

// Start the server
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});