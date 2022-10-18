var mongoose=require("mongoose")
var UserSchema=new mongoose.Schema({
    firstname:String,
    lastname:String,
    mobile:String,
    email:String,
    password:String,
    profilepicture:String
},{timestamps:true})

var Users=new mongoose.model("Users",UserSchema);

module.exports=Users;