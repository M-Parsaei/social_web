
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