const express = require("express");
const { getPost, createPost, deletePost, likePost, getFeedPosts } = require("../controllers/PostContollers");
const router = express.Router();

router.post("/create",createPost);
router.get("/:postId",getPost);
router.get("/feed",getFeedPosts);
router.delete("/delete/:postId",deletePost);
router.post("/like/:postId",likePost);

module.exports = router