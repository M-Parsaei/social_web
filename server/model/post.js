const mongoose = require("mongoose")

const PostSchema = new mongoose.Schema({
    userId:{
        type: String,
        required: true
    },
    liked:{
        type: Array,
        default:[]
    },
    desc:{
        type: String,
        required: true
    },
    tags:{
        type: Array,
        default: []
    },
    picture:{
        type:String,
        default:""
    }},
    {timestamps:true}
);

const Post = mongoose.model("post",PostSchema);
module.exports = Post;