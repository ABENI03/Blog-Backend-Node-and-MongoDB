const Users = require('../Schema/User');
const bcrypt = require('bcryptjs')

module.exports = {
    creteUser: (data, callback) => {
        var salt = bcrypt.genSaltSync(10);
        var encryptedPassword = bcrypt.hashSync(data.password, salt)
        
        var user=new Users({
            firstname:data.firstname,
            lastname: data.lastname,
            mobile: data.mobile,
            email:data.email,
            password:encryptedPassword,
        })
        user.save()
            .then((result)=>{
                return callback(null,result)
            })
            .catch((error)=>{
                return callback(error)
            })




    },
    getUsers:(data,callback)=>{
        Users.find()
            .then((result)=>{
                return callback(null,result)
            })
            .catch((error)=>{
                return callback(error)
            })
    },
    getUserById: (data, callback) => {
        id=data.userid
       
        Users.findById(id)
            .then((result)=>{
                return callback(null,result)
            })
            .catch((error)=>{
                return callback(error)
            })
    },

    login: (data, callback) => {
        
        Users.findOne({email:data.email})
             .then((result)=>{
                
                if(result==null){
                    return callback("incorrect email or password")
                }
                var status = bcrypt.compareSync(data.password, result.password)
                if (status) {
                    return callback(null, result)
                }
                else {
                    return callback("incorrect username or password")
                }
             })
             .catch((error)=>{
                return callback(error)
             })


        
    },
    updateProfile: (data, callback) => {
        var id=data.userid
        
        Users.findOneAndUpdate({_id:id},{
            profilepicture:data.profilepic
            
        })
        .then((result)=>{
            return callback(null,result)
        })
        .catch((error)=>{
            return callback(error)
        })

    },
    changePassword: (data, callback) => {
        
        var id=data.userid;
        var salt = bcrypt.genSaltSync(10);
        var encryptedPassword = bcrypt.hashSync(data.newpassword, salt)

        Users.findOneAndUpdate({_id:id},{
            password:encryptedPassword
        })
        .then((result)=>{
            return callback(null,result)
        })
        .catch((error)=>{
            return callback(error)
        })

        // pool.query(queryStatment, values, (error, result) => {
        //     if (error) return callback(error)
        //     else {
                
                
        //         var status = bcrypt.compareSync(data.oldpassword, result[0].passwordHash)


        //         if (status) {
        //             var salt = bcrypt.genSaltSync(10);
        //             var encryptedPassword = bcrypt.hashSync(data.newpassword, salt)      

        //             var queryStatment = 'UPDATE `user` SET `passwordHash`=? WHERE id=?'
        //             var values = [
        //                 encryptedPassword,
        //                 data.userid,
                        
        //             ]

        //             pool.query(queryStatment, values, (error, secondRresult) => {
        //                 if (error) return callback(error)
        //                 else return callback(null, secondRresult)
        //             })
        //         }
        //         else {
        //             return callback("incorrect  password")
        //         }
        //     }
        // })
    },


}


