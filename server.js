import express from "express";
import path from "path";

const app = express();
const PORT = process.env.PORT || 8000;

// Route handler for the root URL ("/")
app.get("/", (req, res) => {
  res.send("Home page ");
});

// Route handler for the "/about" URL
app.get("/about", (req, res) => {
  res.send("This is a about page");
});

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
