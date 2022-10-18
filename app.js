require('dotenv').config()
const express=require('express')
const bodyParser=require("body-parser")
const app=express()
const port=process.env.SERVER_PORT;
const mongoose=require("mongoose");
const userRoute = require('./Routes/usersRoute');
const PostsRoute=require('./Routes/postsRoute');
const cookieParser=require("cookie-parser")
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
app.use(cookieParser())
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'))
///users route
app.use('/api/users',userRoute)
app.use('/api/posts',PostsRoute)
//home page
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
  });
app.get('/*',(req, res) => {
    res.json({
        status:400,
        message:"Route Not Found"
    })
  });


app.listen(port,()=>{
    console.log('Server is running ... on port ',port)

})