const express=require("express")
var gameData= require('../models/games-model')
const route= express.Router()

route.get('/games',(req,res,next)=>{
  gameData.find().then(data=>{
    console.log(data)
    res.status(200).json(data)
  })

});

route.get('/games/:id',(req,res)=>{
  console.log(req.params.id)
  gameData.findById(req.params.id).then(data=>
    {
      console.log(data)
      res.json(data)
    }).catch
    ((err)=>{console.log(err)})
  // res.status(200).json(game)

})

route.get("/game/:custom",(req,res)=>{
  gameData.find({releaseDate:req.params.custom}).then((data)=>{
    res.status(200).json(data)
  })
})

route.get("/firstgame/:custom",(req,res)=>{
  gameData.findOne({releaseDate:req.params.custom}).then((data)=>{
    res.status(200).json(data)
  })
})

module.exports= route
