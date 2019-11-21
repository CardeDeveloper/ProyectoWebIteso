var express = require('express');
var router = express.Router();
const dishModel = require('../models/dish');

router.get('/:id', function(req, res, next) {
    dishModel.findOne({_id:req.params.id}, function(err, dish){
   
      if(err){
        next(err)
      }else{
        res.json({ status: 'success' , data : {dish: dish}});
      }
    });
    
  });
/* GET dishs listing. */
router.get('/', function(req, res, next) {
  dishModel.find({}, function(err, dishes){
 
    if(err){
      next(err)
    }else{
      res.json({ status: 'success' , data : {dishes: dishes}});
    }
  });
  
});


router.post('/', function(req, res, next) {
    try{
    dishModel.create({
       name: req.body.name, 
       unit: req.body.unit, 
       quantity: req.body.quantity
       
     }, (err, result)=>{
      console.log("llego")
       if(err){
         res.status(400).json({status: "error", message: err});
       }
         res.json({status: "success", message: "dish added!!", data: result});    
    })
   }catch(error){
     res.status(500).json({status: "error", error: error});
   }
 
});

router.put('/:id', function(req, res, next){
  dishModel.findOneAndUpdate(req.params.id, {
      name: req.body.name, 
      unit: req.body.unit, 
      quantity: req.body.quantity
    }, function(err, dishInfo){
      if(err)
        next(err);
      else{
        res.json({status:"success", message: "dish updated successfully", data: dishInfo});
      }
  });
});


router.delete('/:id', function(req, res, next) {
  dishModel.findOneAndDelete(req.params.id, function(err, dishInfo){
    if(err)
      next(err);
    else{
      res.json({status:"success", message: "dish deleted successfully", data: dishInfo});
    }
});
});

module.exports = router;
