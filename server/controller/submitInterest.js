const mongoose = require('mongoose')
var Interests = require('../models/Interests')

let submitNewInterest = (req,res) => {

    var interest = new Interest(req.body);
    user.save(function(err,res){
    if(err){
    console.log('error in saving')}
    if(res){
        console.log('user added')
    }
    })
}

module.exports = submitNewInterest