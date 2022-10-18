const mongoose=require("mongoose")

const CommentSchema=mongoose.Schema({
    postid:mongoose.Schema.Types.ObjectId,
    autorid:mongoose.Schema.Types.ObjectId,
    content:String,

})

const Comment=mongoose.model("Comment",CommentSchema)

module.exports=Comment