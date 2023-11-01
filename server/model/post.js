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
    commentNumber:{
        type: Number,
        default: 0
    },
    picture:{
        type:String,
        default:""
    }},
    {timestamps:true}
);

const Post = mongoose.model("post",PostSchema);
module.exports = Post;