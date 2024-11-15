const express = require("express");
const { connection } = require("./database");

require("dotenv").config();

const app = express();




app.get("/",async(req,res)=>{
    res.json({sucess:trusted,message:"I am api for Learnio"})
})
 
const port = process.env.PORT 

app.listen(port,async()=>{
    try {
        
        await connection;
        console.log("Connected to mongoDB Successfully");
    } catch (error) {
        console.log("Error occured while connectiong to Database", error);
    }
    console.log("App is listening on port 6000");
})