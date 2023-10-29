const express = require("express");
const { getPost, createPost, deletePost, likePost, getFeedPosts, getAllPosts } = require("../controllers/PostContollers");
const { authorizationContorller } = require("../controllers/AuthControllers");
const router = express.Router();

router.post("/create",authorizationContorller,createPost);
router.get("/:postId",getPost);
router.post("/feed",authorizationContorller,getFeedPosts);
router.get("/:userId/getAll",getAllPosts);
router.delete("/delete/:postId",authorizationContorller,deletePost);
router.post("/like/:postId",authorizationContorller,likePost);

module.exports = router