import express from "express";
import path from "path";

const app = express();
const PORT = process.env.PORT || 8000;

let posts = [
  { id: 1, title: "post one" },
  { id: 2, title: "post two" },
  { id: 3, title: "post three" },
];

// Route handler for the "/about" URL
app.get("/", (req, res) => {
  res.json({ message: "This is a home page" });
});

// Route handler for the root URL ("/")
app.get("/api/posts", (req, res) => {
  res.json(posts);
});

app.get("/api/posts/:id", (req, res) => {
  try {
    const postId = parseInt(req.params.id);
    const singlePost = posts.find((post) => post.id == postId);

    if (!singlePost) {
      return res.status(404).json({ message: "post not found" });
    }

    res.json(singlePost);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
