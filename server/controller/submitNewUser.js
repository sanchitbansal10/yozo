const mongoose = require('mongoose')
var User = require('../models/User')

let submitNewUser = (req,res) => {

    var user = new User(req.body);
    user.save(function(err,res){
    if(err){
    console.log('error in saving')}
    if(res){
        console.log(res)
    }
    })
}

module.exports = submitNewUser