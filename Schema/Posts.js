var mongoose=require('mongoose')

var PostSchema=new mongoose.Schema({
    authorid:mongoose.Schema.Types.ObjectId,
    title:String,
    summary:String,
    content:String


    
})
var Posts=mongoose.model("Posts",PostSchema);
module.exports=Posts;
