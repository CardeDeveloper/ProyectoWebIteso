const mongoose = require('mongoose')

var Schema = mongoose.Schema

//Define Schema
  var Schema = new Schema({
    table: { type: Schema.Types.ObjectId, ref: 'Table' },
    products:[{ type: Schema.Types.ObjectId, ref: 'Product',default :[] }],
    dishes: [{ type: Schema.Types.ObjectId, ref: 'Dish' ,default :[]}],
    total:{
        type:Number,
        default: 0 

    },
    is_active:{type:Boolean, default:true},
    clients: {type:Number, default:1},
    created_at: { type: Date, default: Date.now },
  });

module.exports= mongoose.model('Order',  Schema)