'use strict'
var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var InterestsSchema = new Schema ({
    Cricket:[String],
    WebDevelopment:[String],
    AndroidDevelopment:[String],
    Reading:[String],
    Singing:[String],
    Dancing:[String],
    Sketching:[String]
})

module.exports = mongoose.model('Interests',InterestsSchema)
