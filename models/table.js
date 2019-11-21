const mongoose = require('mongoose')

var Schema = mongoose.Schema

//Define Schema
  var Schema = new Schema({
    number: {type:Number , required: true},
    reference:{type:String},
    seats:{
        type:Number,
        default: 1

    },
    created_at: { type: Date, default: Date.now },
  });

module.exports= mongoose.model('Table',  Schema)