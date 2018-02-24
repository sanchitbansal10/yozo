const mongoose = require('mongoose')
var user = require('../models/User')

let giveInterestedPeople = (req,res) =>{
    let interest = req.query.interest
    user.find({interests:interest},function(err,data){
        res.json(data)
    })
}

module.exports = giveInterestedPeople