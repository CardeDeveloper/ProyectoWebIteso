const mongoose = require('mongoose')
const ingredient = require('./ingredient')

var Schema = mongoose.Schema

//Define Schema
  var Schema = new Schema({
    name: {type:String , required: true},
    price:{type:Number , required: true},
    ingredients: [ingredient.schema],
    quantity:{type: Number},
    image:{type:String},
    description:{type:String},
    created_at: { type: Date, default: Date.now },
  });

module.exports= mongoose.model('Dish',  Schema)