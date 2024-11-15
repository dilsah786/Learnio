const express = require("express");
const cors = require("cors");
const { connection } = require("./db");
require("dotenv").config()

const app = express();

app.use(cors())
app.use(express.json());




const PORT = process.env.PORT 


console.log(PORT);

app.get("/",(req,res)=>{
   res.json({success:true}) 
})


app.listen(PORT,async()=>{
    try{
      await connection;
    }catch(err){
        console.log("Error while connecting to Database" + err); 
    }

    console.log(`App is listening on ${PORT}`);

})