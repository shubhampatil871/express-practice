import express from "express";

const app = express();
const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  console.log(req.url);
  res.send("Hello from express!");
});
app.get("/about", (req, res) => {
  res.send("This is about page");
});

app.listen(PORT, () => {
  console.log("server running on port", PORT);
});
