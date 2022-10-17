const { Router } = require("express");
const { GetUsers, CreateUser, GetUserById, UpdatePassword, UpdateProfile, Login,  } = require("../Controllers/userController");

const userRoute=Router()


userRoute.get('/',GetUsers)
userRoute.post('/',CreateUser)
userRoute.get('/:userid',GetUserById)
userRoute.post('/login',Login)
userRoute.patch('/picture',UpdateProfile)
userRoute.patch('/password',UpdatePassword)


module.exports=userRoute