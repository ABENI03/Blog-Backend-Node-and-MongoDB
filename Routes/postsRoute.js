const { Router } = require("express");
const { CreatePost, CommentPost, GetPosts, GetPostbyUserId, GetPostbyPostId, GetCommentByPostId, UpdatePost, DeletePost } = require('../Controllers/postsController');
const PostsRoute=Router()

PostsRoute.post('',CreatePost)
PostsRoute.post('/comment',CommentPost)
PostsRoute.get('',GetPosts)
PostsRoute.get('/user/:userid',GetPostbyUserId)
PostsRoute.get('/:postid',GetPostbyPostId)
PostsRoute.get('/comment',GetCommentByPostId)
PostsRoute.patch('/',UpdatePost)
PostsRoute.delete('/:postid',DeletePost) 
module.exports=PostsRoute