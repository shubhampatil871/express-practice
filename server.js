import express from "express";
import posts from "./routes/posts.js";

const app = express();
app.use("/api/posts", posts);

const PORT = process.env.PORT || 8000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "This is a home page" });
});

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
