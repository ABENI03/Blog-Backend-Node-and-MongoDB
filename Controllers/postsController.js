const { createPost, getPosts, getPostbyUserId, getPostbyPostId, updatePost, deletePost, getCommentByPostId, commentPost } = require("../models/postsModel")

module.exports={ 
    CreatePost:(req,res)=>{
        createPost(req.body,(error,result)=>{
            if (error) {
                res.json({
                    status: 404,
                    message: error
                })
            }
            else {
                res.json({
                    status: 200,
                    message: 'Post Created successfully'
                })
            }
        })
    },
    GetPosts:(req,res)=>{
        getPosts(req.body,(error,result)=>{
            if (error) {
                res.json({
                    status: 404,
                    message: error
                })
            }
            else {
                res.json({
                    status: 200,
                    message: 'fetching post successfully',
                    data:result
                })
            }
        })
    },
    UpdatePost:(req,res)=>{
        updatePost(req.body,(error,result)=>{
            if (error) {
                res.json({
                    status: 404,
                    message: error
                })
            }
            else {
                res.json({
                    status: 200,
                    message: 'Post updated successfully'
                })
            }
        })
    },
    DeletePost:(req,res)=>{
        deletePost(req.params,(error,result)=>{
            if (error) {
                res.json({
                    status: 404,
                    message: error
                })
            }
            else {
                res.json({
                    status: 200,
                    message: 'Post delted successfully'
                })
            }
        })
    },
    GetPostbyUserId:(req,res)=>{
        getPostbyUserId(req.params,(error,result)=>{
            if (error) {
                res.json({
                    status: 404,
                    message: error
                })
            }
            else {
                res.json({
                    status: 200,
                    message: 'fetching post successfully',
                    data:result
                })
            }
        })
    },
    GetPostbyPostId:(req,res)=>{
        getPostbyPostId(req.params,(error,result)=>{
            if (error) {
                res.json({
                    status: 404,
                    message: error
                })
            }
            else {
                res.json({
                    status: 200,
                    message: 'fetching post successfully',
                    data:result
                })
            }
        })
    },
    CommentPost:(req,res)=>{
        commentPost(req.body,(error,result)=>{
            if (error) {
                res.json({
                    status: 404,
                    message: error
                })
            }
            else {
                res.json({
                    status: 200,
                    message: 'Comment Created successfully'
                })
            }
        })
    },
    GetCommentByPostId:(req,res)=>{
        getCommentByPostId(req.body,(error,result)=>{
            if (error) {
                res.json({
                    status: 404,
                    message: error
                })
            }
            else {
                res.json({
                    status: 200,
                    message: 'comment fetching successfully',
                    data:result
                })
            }
        })
    },
    

}