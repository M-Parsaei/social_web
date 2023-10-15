const User = require("../model/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const authorizationContorller = async (req, res, next) => {
  try {
    // getting the jwt token from header
    console.log("I am there") 
    if (!req.headers.authorization){
        throw "no token found";
    }
    const token = await req.headers.authorization.split(" ")[1];
    /*if (!token){
        console.log("yellow");
        throw "no token found";
    }*/
    const user = await jwt.verify(token,process.env.JWTSECRET);
    if (!user){
        throw "invalid token";
    }
    req.body.userId = user.userId;
    next();
  } catch (err) {
    console.log(err);
    err.name = "";
    res.status(400).json({ err: err.toString() });
  }
};

const registerController = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    console.log(username);
    const salt = await bcrypt.genSalt(10);
    const hashpassword = await bcrypt.hash(password, salt);
    const user = new User({ username, email, password: hashpassword });
    const userdb = await user.save();
    res.status(200).json({ userdb });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error });
  }
};

const loginController = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("No account with this email is registerd");
    }
    const isPasswordOK = await bcrypt.compare(password, user.password);
    if (!isPasswordOK) {
      throw new Error("Wrong Password.");
    }
    //res.status(200).json({username:user.username,email:user.email,password:user.password});
    const token = jwt.sign({ userId: user._id }, process.env.JWTSECRET, {
      expiresIn: "4h",
    });
    res.status(200).json({ user, token });
  } catch (error) {
    console.log(error);
    error.name = ""; //to remove the "Error" word from the error message string
    const errorMessage = error.toString();
    res.status(400).json({ error: error.toString() });
  }
};

module.exports = {
  registerController,
  loginController,
  authorizationContorller
};
