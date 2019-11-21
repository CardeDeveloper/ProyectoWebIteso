const mongoose = require('mongoose')

var Schema = mongoose.Schema

//Define Schema
  var Schema = new Schema({
    name: {type:String , required: true},
    unit:{type:String , required: true},
    quantity:{type: Number, default:0},
    created_at: { type: Date, default: Date.now },
  });

module.exports= mongoose.model('Ingredient',  Schema)