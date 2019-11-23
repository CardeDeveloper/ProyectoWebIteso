const mongoose = require('mongoose')
const ingredient = require('./ingredient')

var Schema = mongoose.Schema

//Define Schema
  var Schema = new Schema({
    name: {type:String , required: true},
    price:{type:Number , required: true},
    ingredients: [{
      _id: {type:String ,required:true},
      name: {type:String , required: true},
      quantity:{type: Number, default:0},
    }],
    image:{type:String},
    created_at: { type: Date, default: Date.now },
  });

module.exports= mongoose.model('Dish',  Schema)