const express = require("express");
const { createComment, deleteComment, getUserComments, getPostComments } = require("../controllers/CommentControllers");
const { authorizationContorller } = require("../controllers/AuthControllers");
const router = express.Router();

router.post("/create/:postId",authorizationContorller,createComment);
router.get("/post/:postId",getPostComments);
router.get("/user/:userId",getUserComments);
router.delete("/delete/:commentId",authorizationContorller,deleteComment);

module.exports = router