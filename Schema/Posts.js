var mongoose=require('mongoose')

var PostSchema=new mongoose.Schema({
    authorid:{ type: mongoose.Schema.Types.ObjectId, ref: "Users" },
    title:String,
    summary:String,
    content:String


    
},{timestamps:true})
var Posts=mongoose.model("Posts",PostSchema);
module.exports=Posts;
