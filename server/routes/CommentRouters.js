const express = require("express");
const { createComment, deleteComment, getUserComments, getPostComments } = require("../controllers/CommentControllers");
const router = express.Router();

router.post("/create/:postId",createComment);
router.get("/post/:postId",getPostComments);
router.get("/user/:userId",getUserComments);
router.delete("/delete/:commentId",deleteComment);

module.exports = router