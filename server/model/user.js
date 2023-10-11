const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    username:{
        type: String,
        require: true,
        unique: true,
        max: 15,
    },
    email:{
        type: String,
        require: true,
        unique: true,
    },
    profilePic:{
        type: String,
        default: ""
    },
    password:{
        type: String ,
        require: true,
        min: 4,
    },
    followers:{
        type: Array,
        default:[]
    },
    isAdmin:{
        type: Boolean,
        default: false
    },
    followings:{
        type:Array,
        default:[]
    },
    bio:{
        type: String,
        default: "Hello, There"
    },
    status:{
        type: Boolean,
        default: false
    }},
    {timestamps:true}
);

const User = mongoose.model("user",UserSchema);
module.exports = User;