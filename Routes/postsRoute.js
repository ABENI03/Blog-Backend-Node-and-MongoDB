const { Router } = require("express");
const { CreatePost, CommentPost, GetPosts, GetPostbyUserId, GetPostbyPostId, GetCommentByPostId, UpdatePost, DeletePost, DeleteComment } = require('../Controllers/postsController');
const { requireAuth } = require("../Middeleware/authUser");
const PostsRoute=Router()

PostsRoute.post('',requireAuth,CreatePost)
PostsRoute.post('/comment',requireAuth,CommentPost)
PostsRoute.get('',GetPosts)
PostsRoute.get('/user/:userid',requireAuth,GetPostbyUserId)
PostsRoute.get('/:postid',requireAuth,GetPostbyPostId)
PostsRoute.get('/comment/:postid',requireAuth,GetCommentByPostId)
PostsRoute.patch('/',requireAuth,UpdatePost)
PostsRoute.delete('/:postid',requireAuth,DeletePost) 
PostsRoute.delete('/comment/:commentid',requireAuth,DeleteComment) 
module.exports=PostsRoute