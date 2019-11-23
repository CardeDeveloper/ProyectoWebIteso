const mongoose = require('mongoose')

var Schema = mongoose.Schema


//Define Schema
  var Schema = new Schema({
    table: { type: Schema.Types.ObjectId, ref: 'Table' },
    products:[{
      name: {type:String , required: true},
      price:{type:Number , required: true},
      qty:{type: Number, required:true}
    }],
    dishes: [{
      name: {type:String , required: true},
      price:{type:Number , required: true},
      qty:{type: Number, required:true}
    }],
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