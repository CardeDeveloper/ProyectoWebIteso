const mongoose = require('mongoose')
const dish = require('./dish')
const product = require('./product')
var Schema = mongoose.Schema


//Define Schema
  var Schema = new Schema({
    table: { type: Schema.Types.ObjectId, ref: 'Table' },
    products:[product.schema],
    dishes: [dish.schema],
    total:{
        type:Number,
        default: 0 

    },
    is_active:{type:Boolean, default:true},
    clients: {type:Number, default:1},
    tip:{type:Number, default:0},
    created_at: { type: Date, default: Date.now },
  });

module.exports= mongoose.model('Order',  Schema)