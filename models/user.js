const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const saltRounds= 12

var Schema = mongoose.Schema

//Define Schema
  var userSchema = new Schema({
    name: {type:String , required: true},
    password:{type:String , required: true},
    email: {
        type: String, required: true,
        trim: true, unique: true,
        match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    },
    type:{
        type:Number,
        default: 0 // 0 mesero || 1 admin

    },
    url_image:{type:String},
    created_at: { type: Date, default: Date.now },
  });


  // hash user password before saving into database
userSchema.pre('save', function(next){
    this.password = bcrypt.hashSync(this.password, saltRounds)
    next()
    });

  module.exports= mongoose.model('User',  userSchema)
