const express = require("express");
const { getPost, createPost, deletePost, likePost } = require("../controllers/PostContollers");
const router = express.Router();

router.post("/create",createPost);
router.get("/:postId",getPost);
router.delete("/delete/:postId",deletePost);
router.post("/like/:postId",likePost);

module.exports = router