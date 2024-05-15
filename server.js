import express from "express";
import path from "path";
import posts from "./routes/posts.js";
const PORT = process.env.PORT || 8000;

//instantiate the app
const app = express();

//middleware
app.use(express.json());
app.use("/api/posts", posts);

//root url
app.get("/", (req, res) => {
  res.json({ message: "This is a home page" });
});

//start the app
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
