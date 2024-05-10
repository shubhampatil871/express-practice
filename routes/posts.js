import express from "express";
import { Router } from "express";

const router = express.Router();
let posts = [
  { id: 1, title: "post one" },
  { id: 2, title: "post two" },
  { id: 3, title: "post three" },
];

router.get("/", (req, res) => {
  res.json(posts);
});

router.get("/:id", (req, res) => {
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

router.post("/", (req, res) => {
  try {
    const { id, title } = req.body; // Extract post data from request body
    const newPost = { id, title }; // Create a new post object

    posts.push(newPost); // Add the new post to the posts array
    res.status(201).json(newPost); // Respond with the newly created post and 201 status code
  } catch (error) {
    res.status(500).json({ message: "Internal server error" }); // If any error occurs, return 500 status
  }
});

export default Router;
