const express= require('express');
const mongoose= require('mongoose');
var gameData= require('./models/games-model')
var gameRoute= require('./routes/games')
var formroute= require('./routes/forms')
//Connection to Database


const url="mongodb+srv://shopNowUser:shopnow123@shopnow.msvfa.mongodb.net/shopnow?retryWrites=true&w=majority"


// mongoose.connect(url,{useNewUrlParser: true}).then(()=>{
//   console.log("COnnected to Database")
// }).catch(()=>{
//   console.log("COnnection Failed");
// })

mongoose.connect(url,{useNewUrlParser: true}).then(()=>{
  console.log("connected")
}).catch(()=>{
  console.log("Not connected")
})



const app= express();

  //Body Parser Code Cors code
  app.use(express.json());
  app.use(express.urlencoded({extended: false}));

  app.use((req, res, next)=>{
  res.setHeader("Access-Control-Allow-Origin","*");
  res.setHeader("Access-Control-Allow-Headers",
  "Origin,X-Requested-With, Content-Type,Accept");

  res.setHeader("Access-Control-Allow-Methods","GET, POST, PUT, DELETE");
  next();

  });

// games=[
//   {id:1,name:"NFS","releaseDate":2010},
//   {id:2,name:"GTA VC","releaseDate":2011},
//   {id:3,name:"MK","releaseDate":2012},
//   {id:4,name:"GRID","releaseDate":2013}
// ]


app.use("",gameRoute)
app.use("/form",formroute)





// app.get('/games/:id',(req,res)=>{
//       const game=games.filter(data=> req.params.id == data.id)
//       res.status(200).json(game)

// })







// sampleData={id:5,title:"GRID",releaseDate:2013}

// app.post("/postgame",(req,res)=>{
//   var mygame= new gameData({
//     id: req.sampleData.id,
//     title: req.sampleData.title,
//     releaseDate: req.sampleData.releaseDate
//   })
//   mygame.save()
// })

module.exports= app;
