'use strict'
var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var InterestsSchema = new Schema ({
    interest:[Schema]
})

module.exports = mongoose.model('Interest',InterestsSchema)
