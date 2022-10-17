const { Router } = require("express");
const { GetUsers, CreateUser } = require("../Controllers/userController");

const userRoute=Router()


userRoute.get('/',GetUsers)
userRoute.post('/',CreateUser)


module.exports=userRoute