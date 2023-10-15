const Post = require("../model/post");

module.exports.createPost = async (req,res) =>{
    try{
        console.log(req.body);
        const post = new Post(req.body);
        const savedPost = await post.save();
        res.status(200).json({savedPost});
    }
    catch(err){
        err.name="";
        res.status(500).json({err: err.toString()});
    }
}
module.exports.getPost = async (req,res) =>{
    try{
        const postId = req.params.postId;
        const post = await Post.findById(postId);
        if (!post){
            throw "no such a post was found";
        }
        res.status(200).json({post});
    }
    catch(err){
        err.name="";
        res.status(500).json({err: err.toString()});
    }
}
module.exports.deletePost = async (req,res) =>{
    try{
        const postId = req.params.postId;
        const post = await Post.findById(postId);
        const userId = req.body.userId;
        if (post.user !== userId){
            throw "you are not allowed to remove this post";
        }
        if (!post){
            throw "no such a post was found";
        }
        await post.deleteOne();
        res.status(200).json({post});
    }
    catch{
        err.name="";
        res.status(500).json({err: err.toString()});
    }
}
module.exports.updatePost = (req,res) =>{
    
}
module.exports.getFeedPosts = (req,res) =>{
    try{
        const user = req.body.userId
        if (!user){
            throw "no such a user was found";
        }
        // TODO to be implemented 
    }
    catch(err){
        err.name="";
        res.status(500).json({err: err.toString()});
    }
}
module.exports.likePost = async (req,res) =>{
    try{
        const postId = req.params.postId;
        const post = await Post.findById(postId);
        const userId = req.body.userId; 
        if (!post){
            throw "no such a post was found";
        }
        console.log(post);
        if (post.liked.includes(userId)){
            // user has already liked this post
            post.liked = post.liked.filter((e)=>{e!=user});
        }
        else{
            post.liked.push(userId);
        }
        await post.save();
        res.status(200).json({post});
    }
    catch(err){
        err.name=""
        res.status(500).json({err: err.toString()});
    }
}