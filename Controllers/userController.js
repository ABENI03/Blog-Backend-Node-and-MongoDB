const { creteUser, getUsers, getUserById, changePassword, updateProfile, login } = require('../Models/usersModel');
const jwt=require("jsonwebtoken")

const maxAge=3*24*60*60;
const createToken=(userid)=>{
    return jwt.sign({userid},process.env.Secret,{
        expiresIn:maxAge
    })
}

module.exports = {
    CreateUser: (req, res) => { 
        creteUser(req.body, (error, result) => {
            if (error) {
                console.log(error)
                res.json({
                    status: 404,
                    message: error
                })
            }
            else {
                res.json({
                    status: 200,
                    message: 'User Registered successfully',
                    data:result
                })
            }
        })
    },
    GetUsers:(req,res)=>{
        getUsers(req.body,(error,result)=>{
            if (error) {
                res.json({
                    status: 404,
                    message: error
                })
            }
            else {
                res.json({
                    status: 200,
                    message: 'Data Fetch Successfull',
                    data:result
                })
            }
        })
    },
    GetUserById: (req, res) => {
        getUserById(req.params, (error, result) => {
            if (error) {
                res.json({
                    status: 404,
                    message: error
                })
            }
            else {
                res.json({
                    status: 200,
                    message: 'user profile fetched successfully',
                    data: result
                })
            }
        })
    },

    Login: (req, res) => {
        login(req.body, (error, result) => {
            if (error) {
                res.json({
                    status: 404,
                    message: error
                })
            }
            else {
                const token=createToken(result.id)
                res.cookie("token",token,{maxAge:maxAge*1000});
                res.json({
                    status: 200,
                    message: 'Login Successful',
                    token:token,
                    data: result
                })
            }
        })
    },
    UpdateProfile: (req, res) => {
    
        updateProfile(req.body, (error, result) => {
            if (error) {
                res.json({
                    status: 404,
                    message: error
                })
            }
            else {
                res.json({
                    status: 200,
                    message: 'Updated Sucessfully',
                    data: result
                })
            }
        })
    },
    UpdatePassword: (req, res) => {
        changePassword(req.body, (error, result) => {
            if (error) {
                res.json({
                    status: 404,
                    message: error
                })
            }
            else {
                res.json({
                    status: 200,
                    message: 'Password Updated Sucessfully',
                    data: result
                })
            }
        })
    },
    LogOut:(req,res)=>{
        res.cookie("token","",{maxAge:1});
        res.json({
            status: 200,
            message: 'Logout Successful',
            
        })
    }
    
    
}