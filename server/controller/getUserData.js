const mongoose = require('mongoose')
var user = require('../models/User')


let getUserData = (req,res)=>{
    console.log('get user data')
    var rollNo= req.query.rollNo;
    user.find({rollNo:rollNo},function(err,data){
        if(err){console.log('cant ind')}
        res.json(data)
    })
}



module.exports =getUserData