const User = require("../model/user");
const bcrypt = require("bcrypt");

const registerController =  async (req,res,next)=>{
    try{
        const {username,email,password} = req.body
        console.log(username)
        const salt = await bcrypt.genSalt(10);
        const hashpassword = await bcrypt.hash(password,salt)
        const user = new User({username,email,password:hashpassword})
        const userdb = await user.save()
        res.status(200).json({userdb})
    }
    catch(error){
        console.log(error);
        res.status(400).json({error});
    }
}

const loginController = async(req,res,next)=>{
    try{
        const {email,password} = req.body
        const user = await User.findOne({email});
        if (!user){
            throw new Error("No account with this email is registerd");
        }
        console.log(user);
        console.log(user.password);
        const isPasswordOK = await bcrypt.compare(password,user.password);
        if (!isPasswordOK){
            throw new Error("Wrong Password.");
        }
        //res.status(200).json({username:user.username,email:user.email,password:user.password});
        res.status(200).json({user});
    }
    catch(error){
        console.log(error);
        res.status(400).json({error});
    }
}

module.exports = {
    registerController, loginController

}