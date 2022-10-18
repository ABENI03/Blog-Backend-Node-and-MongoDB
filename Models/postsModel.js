const Comment = require('../Schema/Comment')
const Posts = require('../Schema/Posts')

module.exports = {
    createPost: (data, callback) => {
        var post = new Posts({
            authorid: data.userid,
            title: data.title,
            summary: data.summary,
            content: data.content
        })
        post.save()
            .then((result)=>{
                return callback(null,result)
            })
            .catch((error)=>{
                return callback(error)
            })

        

    },
    getPosts: (data, callback) => {
        
        Posts.find()
        .populate({path:'authorid', select:'firstname lastname email mobile email profilepicture-_id'})
             .then((result)=>{
                return callback(null,result)
             })
             .catch((error)=>{
                return callback(error)
             })
    },
    updatePost: (data, callback) => {
    
        var postId=data.postid
        Posts.findOneAndUpdate({_id:postId},{
            title: data.title,
            summary: data.summary,
            content: data.content
        })
             .then((result)=>{
                return callback(null,result)
             })
             .catch((error)=>{
                return callback(error)
             })
    },
    deletePost: (data, callback) => {

        
        var postId=data.postid
        Posts.deleteOne({_id:postId})
             .then((result)=>{
                return callback(null,result)
             })
             .catch((error)=>{
                return callback(error)
             })
        
    },
    getPostbyUserId: (data, callback) => {
        
        var authorId=data.userid
        Posts.find({
            authorid:authorId
        })
        .then((result)=>{
            return callback(null,result)
         })
         .catch((error)=>{
            return callback(error)
         })
    },
    getPostbyPostId: (data, callback) => {
        var postId=data.postid
        Posts.findById(postId)
        .then((result)=>{
            return callback(null,result)
         })
         .catch((error)=>{
            return callback(error)
         })
    },
    commentPost: (data, callback) => {
        var comment=new Comment({
            postid:data.postid,
            autorid:data.userid,
            content:data.content
        })

        comment.save()
                .then((result)=>{
                    return callback(null,result)
                })
                .catch((error)=>{
                    return callback(error)
                })
            
    },
    getCommentByPostId: (data, callback) => {
        var postId=data.postid
        Comment.findById(postId)
        .then((result)=>{
            return callback(null,result)
         })
         .catch((error)=>{
            return callback(error)
         })
    },
    deleteComment:(data, callback) => {

        
        var commentId=data.commentid
        Comment.deleteOne({_id:commentId})
             .then((result)=>{
                return callback(null,result)
             })
             .catch((error)=>{
                return callback(error)
             })
        
    },
}