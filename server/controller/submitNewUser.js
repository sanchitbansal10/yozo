const mongoose = require('mongoose')
var User = require('../models/User')
var Interests= require('../models/Interests')

let submitNewUser = (req,res) => {

    var user = new User(req.body);
    user.save(function(err,res){
    if(err){
    console.log('error in saving')}
    if(res){
        console.log('user added')
    }
    })

    

}

module.exports = submitNewUser