const express = require("express");
let app = express();

const dotenv = require("dotenv");
dotenv.config()


app.get("/",(req,res)=>{
    res.send("home page")
})


const PORT = process.env.port || 1000
app.listen(PORT,console.log(`listening on ${PORT}`))