const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    username:{
        type: String,
        required: [true,"please provide an username"],
        unique: [true,"this username is already taken "],
        max: 15,
    },
    email:{
        type: String,
        required: [true, 'email is required'],
        match: [/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/, 'please provide a valid email format'],
        unique: [true,"please provide an email"]
    },
    profilePic:{
        type: String,
        default: ""
    },
    password:{
        type: String ,
        required: [true, "please provide a password"],
        min: [4, "password must have at least 4 letters"]
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
    },
    gender: {
        type: String,
        enum: ['male', 'female'],
      },
      birthdate: {
        type: Number, 
        default: null
      },
      birthmonth: {
        type: Number, 
        default: null
      },
      birthyear:{
        type: Number, 
        default: null
      },
      location:{
        type: String,
        default: null
      }},
    {timestamps:true}
);

const User = mongoose.model("user",UserSchema);
module.exports = User;