var mongoose=require("mongoose");

//Define schema
var Schema= mongoose.Schema;

var formSchema=new Schema({
  name: String,
  mobile: String,
  password: String,
  message: String

})

var form= mongoose.model("Form",formSchema)

module.exports=form
