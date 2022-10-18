const jwt=require('jsonwebtoken')

const requireAuth=(req,res,next)=>{
    const token=req.cookies.token
    if(token){
          jwt.verify(token,process.env.Secret,(error,decodedToken)=>{
            if(error){
                res.json({
                    status: 404,
                    message: "UnAuthnticated user Please Login"
                })
            }
            else{
                console.log(decodedToken)
                next()
            }
          }) 
    }
    else{
        res.json({
            status: 404,
            message: "Invalid Token"
        })
    }
}

module.exports={requireAuth}
