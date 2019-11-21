var express = require('express');
var router = express.Router();
const userModel = require('../models/user');

router.get('/:id', function(req, res, next) {
  userModel.findOne({_id:req.params.id}, function(err, user){
 
    if(err){
      next(err)
    }else{
      res.json({ status: 'success' , data : {users: user}});
    }
  });
  
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  userModel.find({}, function(err, users){
 
    if(err){
      next(err)
    }else{
      res.json({ status: 'success' ,message: "Usuarios Encontrados!!" , data : {users: users}});
    }
  });
  
});


router.post('/', function(req, res, next) {
    try{
    userModel.create({
       name: req.body.name, 
       email: req.body.email, 
       password: req.body.password,
       url_image: req.body.url_image
       
     }, (err, result)=>{
      console.log("llego")
       if(err){
         res.status(400).json({status: "error", message: err});
       }
         res.json({status: "success", message: "Usuario añadido satisfactoriamente!!", data: result});    
    })
   }catch(error){
     res.status(500).json({status: "error", error: error});
   }
 
});

router.put('/:id', function(req, res, next){
  userModel.findOneAndUpdate(req.params.id, {
      name: req.body.name, 
      email: req.body.email,
      password: req.body.password,
      url_image: req.body.url_image
    }, function(err, userInfo){
      if(err)
        next(err);
      else{
        res.json({status:"success", message: "User updated successfully", data: userInfo});
      }
  });
});


router.delete('/:id', function(req, res, next) {
  userModel.findOneAndDelete(req.params.id, function(err, userInfo){
    if(err)
      next(err);
    else{
      res.json({status:"success", message: "User updated successfully", data: userInfo});
    }
});
});

module.exports = router;
