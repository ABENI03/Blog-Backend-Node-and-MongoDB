require('dotenv').config()
const express=require('express')
const bodyParser=require("body-parser")
const app=express()
const port=process.env.PORT || 5000;
const mongoose=require("mongoose");
const userRoute = require('./Routes/usersRoute');
const PostsRoute=require('./Routes/postsRoute');
const cookieParser=require("cookie-parser")
const cors=require('cors')
//mongoose Database Connection
const mongoDbUrl=process.env.mongoDbUrl

mongoose.connect(mongoDbUrl)
        .then((result)=>{
            console.log("****--Database Connected--****")
        })
        .catch((error)=>{
            console.log(error)
        })

const whitelist = ["http://localhost:3000","https://blog-front-end.herokuapp.com"]
const corsOptions = {
          origin: function (origin, callback) {
            if (!origin || whitelist.indexOf(origin) !== -1) {
              callback(null, true)
            } else {
              callback(new Error("Not allowed by CORS"))
            }
          },
          credentials: true,
        }
app.use(cors(corsOptions))
        








app.use(express.json())
app.use(cookieParser())
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('Public'))
///users route
app.use('/api/users',userRoute)
app.use('/api/posts',PostsRoute)
//home page
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/Views/index.html')
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