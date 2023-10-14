
const User = require("../model/user");

module.exports.getUserContoller = async(req,res)=>{
    try{
        const user = await User.findById(req.params.id);
        if (!user){
            throw "User not found";
        }
        res.status(200).json(user);
    }catch(err){
        res.status(500).json({err});
    }
}

module.exports.deleteUserContoller = async(req,res)=>{
    if(req.body.userId == req.params.id || req.body.isAdmin){
    try{
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("Account has been deleted");
    }catch(err){
        res.status(500).json(err);
    }
}
else{
    return res.status(403).json("You can only delete your account")
}
}

module.exports.updateUserContoller = async(req,res)=>{
    if(req.body.userId == req.params.id || req.body.isAdmin){
        if(req.body.password){ //TODO: to be updated
            try{
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(req.body.password,salt);
            }catch(err){
                return res.status(500).json(err);
            }
        }
        try{
            await User.findByIdAndUpdate(req.params.id,{
                $set:req.body, //TODO: check this!!!!!
            });
            res.status(200).json("Account has been updated");
        }catch(err){
            res.status(500).json(err);
        }
    }
}

module.exports.getUserFollowerController = async(req,res)=>{
    try{
        const user = await User.findOne({_id:req.params.id});
        const followers = user.followers;
        res.status(200).json({followers})
    }
    catch(error){
        res.status(500).json({"Error":error});
    }
}

module.exports.getUserFollowingController = async(req,res) =>{
    try{
        const user = await User.findOne({_id:req.params.id});
        const followings = user.followings;
        res.status(200).json({followings})
    }
    catch(error){
        res.status(500).json({"Error":error});
    }
}

module.exports.addUserFollowingController = async(req,res)=>{
    try{
        if(req.body.id === req.params.id){
            return res.status(403).json("You can't follow yourself");
        }
        const user = await User.findById({_id:req.body.id});
        const currentUser = await User.findById({_id:req.params.id});
        if(user && currentUser){
            if(!user.followings.includes(req.params.id)){
                let userFollowing = user.followings;
                if(userFollowing.length == 0){
                    userFollowing = [req.params.id];
                }
                else{
                    userFollowing = [
                        ...user.following,req.params.id]
                }
                await User.findOneAndUpdate({_id:req.body.id}, {followings:userFollowing}); 
                const userFollowers = [
                    ...currentUser.followers,req.body.id];
                    await User.findOneAndUpdate({_id:req.params.id},{followers:userFollowers});
            }     
        }
        res.status(200).json("User has been followed");
    }

    catch(error){
        console.log(error);
        res.status(500).json({"Error":error});
    }
}
