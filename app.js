require('dotenv').config()
const express=require('express')
const bodyParser=require("body-parser")
const app=express()
const port=process.env.SERVER_PORT;
const mongoose=require("mongoose");
const userRoute = require('./Routes/usersRoute');
const PostsRoute=require('./Routes/postsRoute');
//mongoose Database Connection
const mongoDbUrl=process.env.mongoDbUrl

mongoose.connect(mongoDbUrl)
        .then((result)=>{
            console.log("****--Database Connected--****")
        })
        .catch((error)=>{
            console.log(error)
        })

app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}));
///users route
app.use('/users',userRoute)
app.use('/posts',PostsRoute)



app.listen(port,()=>{
    console.log('Server is running ... on port ',port)

})