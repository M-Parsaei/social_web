const express  = require ("express");
const mongoose = require ("mongoose");
dotenv.config();

const app = express();


app.use(express.json());

app.get("/", (req,res)=>{
    res.send("Hello World");
})

mongoose.connect(process.env.MONGODB_URI).then(()=>{
    startApp();

})

const startApp = () =>{
    app.listen(process.env.PORT , (req,res)=>{
        console.log(`Server is running.`);
    })
}

