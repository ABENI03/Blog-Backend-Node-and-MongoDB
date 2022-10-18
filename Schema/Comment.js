const mongoose=require("mongoose")

const CommentSchema=mongoose.Schema({
    postid:{ type: mongoose.Schema.Types.ObjectId, ref: "Posts" },
    autorid:{ type: mongoose.Schema.Types.ObjectId, ref: "Users" },
    content:String,

})

const Comment=mongoose.model("Comment",CommentSchema)

module.exports=Comment