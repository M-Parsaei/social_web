const User = require("../model/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { passwordStrength } = require('check-password-strength')


const authorizationContorller = async (req, res, next) => {
  try {
    // getting the jwt token from header
    console.log(req)
    let token= req.headers.authorization;
    if (!token) {
      throw "no token found";
    }
    token = token.split(" ")[1];
    const user = await jwt.verify(token, process.env.JWTSECRET);
    if (!user) {
      throw "invalid token";
    }
    req.body.userId = user.userId;
    next();
  } catch (err) {
    console.log(err);
    err.name = "";
    res.status(400).json({ error: err.toString() });
  }
};

const registerController = async (req, res, next) => {
  try {
    const { username, email, password, retypedPassword } = req.body;
    console.log(passwordStrength("fuck9@A_"))
    if (!password){
      throw "Please provide a password"
    }
    else if (passwordStrength(password).contains.length < 3){
      throw "your password must include uppercase, symbole, number"
    }
    if (retypedPassword !== password){
      throw "Passwords don't match together."
    }
    const salt = await bcrypt.genSalt(10);
    const hashpassword = await bcrypt.hash(password, salt);
    const user = new User({ username, email, password: hashpassword });
    const userdb = await user.save();
    const token = jwt.sign({ userId: userdb._id }, process.env.JWTSECRET, {
      expiresIn: "4h",
    });
    res.status(200).json({ user:userdb, token });
  }  catch (err) {
    // handling validation errors from mongoose
    err.name = "";
    let errorMessage = err.toString()
    if (errorMessage.includes("ValidationError")){
      // then it is a validation error from mongoose
      errorMessage = err.toString().split(":")[2]
    }
    console.log(errorMessage);
    res.status(400).json({ error: errorMessage });
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
  authorizationContorller,
};
