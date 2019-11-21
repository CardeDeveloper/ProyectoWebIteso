var express = require('express');
var router = express.Router();
const userModel = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.post('/', function(req,res,next){
    userModel.findOne({email:req.body.email}, function(err, userInfo){
        if(err){
            next(err);
        }else{
            if(!req.body.email || !req.body.password){
                res.status(400).json({status: "error", message: "you should send email and password", data: null});
                next(err);
            }
            if(bcrypt.compareSync(req.body.password, userInfo.password)){
                const token = jwt.sign({id: userInfo._id, type: userInfo.type}, req.app.get('secretKey'), {expiresIn: '1h'});
                res.json({status: "succes", message: "user found!!", data: {user: userInfo, token:token}});
            }else{
                res.status(401).json({status: "error", message: "Invalid email/password", data: null});
            }
        }
    });
});

module.exports = router;
