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
                req.decodedToken=decodedToken
                next()
            }
          }) 
    }
    else{
        res.json({
            status: 404,
            message: "Invalid Token! Please Login"
        })
    }
}

const AuthisAllowedToChange=(req,res,next)=>{
    const decodedToken=req.decodedToken
  

    if(decodedToken!=undefined && (decodedToken.userid==req.params.userid || decodedToken.userid==req.body.userid)){
          
        next()
    }
    else{
        res.json({
            status: 404,
            message: "you are not allowed To Make Change To Data"
        })
    }
}

module.exports={requireAuth,AuthisAllowedToChange}
