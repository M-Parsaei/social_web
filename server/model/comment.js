const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
    userId:{
        type: String,
        required:true
    },
    comment:{
        type: String,
        required:true,
        min: [1,"comment can not be empty."]
    }
});

const Comment = mongoose.model("comment",CommentSchema);
module.exports = Comment;