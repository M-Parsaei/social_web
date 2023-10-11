const dotenv = require('dotenv')
const express  = require ("express");
const mongoose = require ("mongoose");
const AuthRouter = require("./routes/AuthRouters");
dotenv.config();

const app = express();


app.use(express.json());
app.use('/',AuthRouter);

mongoose.connect(process.env.MONGODB_URI).then(()=>{
    startApp();
})

const startApp = () =>{
    app.listen(process.env.PORT , (req,res)=>{
        console.log(`Server is running.`);
    })
}

