var express = require('express');
var router = express.Router();
const ingredientModel = require('../models/ingredient');
const middlewares = require('../middlewares')

router.use(middlewares.validateUser)

router.get('/:id', function(req, res, next) {
    ingredientModel.findOne({_id:req.params.id}, function(err, ingredient){
   
      if(err){
        next(err)
      }else{
        res.json({ status: 'success' , data : {ingredient: ingredient}});
      }
    });
    
  });
/* GET ingredients listing. */
router.get('/', function(req, res, next) {
  ingredientModel.find({}, function(err, ingredients){
 
    if(err){
      next(err)
    }else{
      res.json({ status: 'success' , data : {ingredients: ingredients}});
    }
  });
  
});


router.post('/', function(req, res, next) {
    try{
    ingredientModel.create({
       name: req.body.name, 
       unit: req.body.unit, 
       quantity: req.body.quantity
       
     }, (err, result)=>{
      console.log("llego")
       if(err){
         res.status(400).json({status: "error", message: err});
       }
         res.json({status: "success", message: "Ingredient added!!", data: result});    
    })
   }catch(error){
     res.status(500).json({status: "error", error: error});
   }
 
});

router.put('/:id', function(req, res, next){
  ingredientModel.updateOne({_id:req.params.id}, {
      name: req.body.name, 
      unit: req.body.unit, 
      quantity: req.body.quantity
    }, function(err, ingredientInfo){
      if(err)
        next(err);
      else{
        res.json({status:"success", message: "ingredient updated successfully", data: ingredientInfo});
      }
  });
});


router.delete('/:id', function(req, res, next) {
  ingredientModel.deleteOne({_id:req.params.id}, function(err, ingredientInfo){
    if(err)
      next(err);
    else{
      res.json({status:"success", message: "ingredient deleted successfully", data: ingredientInfo});
    }
});
});

module.exports = router;
