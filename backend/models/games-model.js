var mongoose= require('mongoose')

//Define schema
var Schema= mongoose.Schema;

var gameSchema=new Schema({
  _id: Schema.Types.ObjectId,
  id: Number,
  title: String,
  releaseDate: Number
})

var game=mongoose.model("Model", gameSchema,"games");

module.exports=game
