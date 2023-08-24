//const express = require("express"); //module
//var app=express();   //initialise express app
//app.get("/",function(req,res){  //accept and send request 
  //  res.send("hello world");
//});
//app.listen(4000);//change port
const express = require("express");
const dotenv = require("dotenv");
dotenv.config({path:".env"});
const PORT=process.env.PORT;
const app=express();
app.get("/",(req,res)=>{
    res 
    .status(200)
    .json({message:"ugh hi",data:"no data on this end point"});

});
app.listen(PORT,()=>{
    console.log('server is running at http://localhost:${PORT}')
});