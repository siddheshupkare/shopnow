const express= require("express")
const routes= express.Router();

var userModel= require("../models/user-model")


routes.post("",(req,res,next)=>{

  var  userdetails= new userModel(
    {
      name: req.body.fname,
      mobile: req.body.mobile,
      password: req.body.password,
      message: req.body.message
    }
  );
  console.log(userdetails);
  userdetails.save();  //postingData to mongodb

  res.status(200).send({"message":"Data received"})



})

module.exports=routes
