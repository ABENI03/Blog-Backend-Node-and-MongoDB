const Users = require('../Schema/User');


module.exports = {
    creteUser: (data, callback) => {
        // var salt = bcrypt.genSaltSync(10);
        // var encryptedPassword = bcrypt.hashSync(data.password, salt)
        
        var user=new Users({
            firstname:data.firstname,
            lastname: data.lastname,
            mobile: data.mobile,
            email:data.email,
            password:data.password,
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
    getUserProfile: (data, callback) => {
        id=data.userid

        Users.findById(id)
            .then((result)=>{
                return callback(null,result)
            })
            .catch((error)=>{
                return callback(error)
            })
    },
    // login: (data, callback) => {


    //     var queryStatment = 'select * from user where email=?';
    //     var values = [
    //         data.email,
    //     ]

    //     pool.query(queryStatment, values, (error, result) => {
    //         if (error) return callback(error)
    //         else {

    //             var status = bcrypt.compareSync(data.password, result[0].passwordHash)


    //             if (status) {
    //                 return callback(null, result[0])
    //             }
    //             else {
    //                 return callback("incorrect username or password")
    //             }
    //         }
    //     })
    // },
    // updateProfile: (data, callback) => {

    //     var queryStatment = 'UPDATE `user` SET `profile`=? WHERE id=?'
    //     var values = [
    //         data.profilepic,
    //         data.userid
    //     ]

    //     pool.query(queryStatment, values, (error, result) => {
    //         if (error) return callback(error)
    //         else return callback(null, result)
    //     })
    // },
    // changePassword: (data, callback) => {
    //     var queryStatment = 'select * from user where id=?';
    //     var values = [
    //         data.userid,
    //     ]

    //     pool.query(queryStatment, values, (error, result) => {
    //         if (error) return callback(error)
    //         else {
                
                
    //             var status = bcrypt.compareSync(data.oldpassword, result[0].passwordHash)


    //             if (status) {
    //                 var salt = bcrypt.genSaltSync(10);
    //                 var encryptedPassword = bcrypt.hashSync(data.newpassword, salt)      

    //                 var queryStatment = 'UPDATE `user` SET `passwordHash`=? WHERE id=?'
    //                 var values = [
    //                     encryptedPassword,
    //                     data.userid,
                        
    //                 ]

    //                 pool.query(queryStatment, values, (error, secondRresult) => {
    //                     if (error) return callback(error)
    //                     else return callback(null, secondRresult)
    //                 })
    //             }
    //             else {
    //                 return callback("incorrect  password")
    //             }
    //         }
    //     })
    // },


}


