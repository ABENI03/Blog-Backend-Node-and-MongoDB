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
        var queryStatment = 'INSERT INTO `post_comment`( `postId`, `title`, `content`) VALUES (?,?,?)';
        var values = [
            data.postid,
            data.title,
            data.content


        ]
        pool.query(queryStatment, values, (error, result) => {
            if (error) return callback(error)
            else return callback(null, result)
        })
    },
    getCommentByPostId: (data, callback) => {
        var queryStatment = 'SELECT * FROM `post_comment` WHERE `postId`=?';
        var values = [
            data.postid,

        ]
        pool.query(queryStatment, values, (error, result) => {
            if (error) return callback(error)
            else return callback(null, result)
        })
    },
}