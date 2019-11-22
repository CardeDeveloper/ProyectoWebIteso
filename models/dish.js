const mongoose = require('mongoose')

var Schema = mongoose.Schema

//Define Schema
  var Schema = new Schema({
    name: {type:String , required: true},
    price:{type:Number , required: true},
    ingredients: [{ type: Schema.Types.ObjectId, ref: 'Ingredient' }],
    created_at: { type: Date, default: Date.now },
  });

module.exports= mongoose.model('Dish',  Schema)