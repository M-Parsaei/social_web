const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
    userId:{
        type: String,
        required:true
    },
    postId:{
        type: String,
        required:true
    },
    desc:{
        type: String,
        required:true,
        min: [1,"comment can not be empty."]
    }},
    {timestamps:true}
);

const Comment = mongoose.model("comment",CommentSchema);
module.exports = Comment;