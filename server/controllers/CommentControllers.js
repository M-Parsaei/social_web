const Comment = require("../model/comment");
const Post = require("../model/post");
const User = require("../model/user");

module.exports.createComment  = async (req,res,next)=>{
    // posting a comment
    const postId = req.params.postId;
    const userId = req.body.userId;
    const desc = req.body.desc;
    try{
        if(desc.length <= 1){
            throw "Not enough characters for comment";
        }
        const comment = new Comment({userId,postId,desc});
        const savedComment = await comment.save();
        const post = await Post.findById(postId);
        post.commentNumber = post.commentNumber + 1;
        post.save();
        res.status(200).json({savedComment, commentNumber: post.commentNumber});
    }
    catch(error){
        error.name="";
        res.status(500).json({error:error.toString()})
    }
}

module.exports.deleteComment = async (req,res,next) =>{
    // delete a comment 
    const commentId = req.params.commentId;
    try{
        const comment = await Comment.findById(commentId);
        const post = await Post.findById(comment.postId);
        if (!comment || !post){
            throw "no such a comment exists";
        }
        else if (comment.userId !== req.body.userId){
            throw "you are not allowed to delete a comment";
        }
        await comment.deleteOne();
        post.commentNumber = post.commentNumber - 1;
        post.save();
        res.status(200).json({comment,commentNumber: post.commentNumber});
    }
    catch(error){
        error.name="";
        res.status(500).json({error:error.toString()})
    }
}

module.exports.getPostComments  = async (req,res,next)=>{
    // get all comments for a post
    const postId = req.params.postId
    try{
       const comments = await Comment.find({postId})
       res.status(200).json({comments});
    }
    catch(error){
        error.name="";
        res.status(500).json({error:error.toString()})
    }
}

module.exports.getUserComments = async (req,res,next)=>{
    // get all comments for a user
    const userId = req.params.userId
    try{
       const comments = await Comment.find({userId})
       res.status(200).json({comments});
    }
    catch(error){
        error.name="";
        res.status(500).json({error:error.toString()})
    }
}
