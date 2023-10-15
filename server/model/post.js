const mongoose = require("mongoose")

const PostSchema = new mongoose.Schema({
    user:{
        type: String,
        require: true
    },
    liked:{
        type: Array,
        default:[]
    },
    desc:{
        type: String,
        require: true
    },
    picture:{
        type:String,
        default:""
    }},
    {timestamps:true}
);

const Post = mongoose.model("post",PostSchema);
module.exports = Post;