const { Router } = require("express");
const { GetUsers, CreateUser, GetUserById, UpdatePassword, UpdateProfile, Login, LogOut,  } = require("../Controllers/userController");
const { requireAuth } = require("../Middeleware/authUser");

const userRoute=Router()


userRoute.get('/',requireAuth,GetUsers)
userRoute.post('/',CreateUser)
userRoute.get('/:userid',requireAuth,GetUserById)
userRoute.post('/login',Login)
userRoute.patch('/picture',requireAuth,UpdateProfile)
userRoute.patch('/password',requireAuth,UpdatePassword)
userRoute.post('/logout',LogOut)


module.exports=userRoute