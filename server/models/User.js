'use strict'
var mongoose = require('mongoose')
var Schema = mongoose.Schema;



var UserSchema = new Schema({
    firstName:String,
    lastName:String,
    rollNo:String,
    password:String,
    about:String,
    branch:String,
    joiningYear:String,
    email:String,
    interests:[String],
})



module.exports = mongoose.model('User',UserSchema)