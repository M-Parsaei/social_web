const express  = require ("express");
const mongoose = require ("mongoose");
const port = 4000;

const app = express();


app.use(express.json());

app.get("/", (req,res)=>{
    res.send("Hello World");
})

app.listen(port, (req,res)=>{
    console.log(`Server is running on port ${port}`);
})