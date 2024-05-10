import express from "express";
import path from "path";
import { title } from "process";

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());

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

// app.post("/api/posts", (req, res) => {
//   try {
//     const { id, title } = req.body;
//     const newPost = { id, title };

//     post.push(newPost);
//     res.status(201).json(newPost);
//   } catch (error) {
//     res.status(500).json({ message: "internal server error" }, error);
//   }
// });

// Route handler for creating a new post
app.post("/api/posts", (req, res) => {
  try {
    const { id, title } = req.body; // Extract post data from request body
    const newPost = { id, title }; // Create a new post object

    posts.push(newPost); // Add the new post to the posts array
    res.status(201).json(newPost); // Respond with the newly created post and 201 status code
  } catch (error) {
    res.status(500).json({ message: "Internal server error" }); // If any error occurs, return 500 status
  }
});

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
