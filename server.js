import express from "express";

const app = express();
const PORT = process.env.PORT || 8000;




app.get("/", (req, res) => {
  res.send("Hello from express!");
});

app.listen(PORT, () => {
  console.log("server running on port", PORT);
});