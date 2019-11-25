var express = require('express');
var router = express.Router();
const productModel = require('../models/product');
const middlewares = require('../middlewares')

router.use(middlewares.validateUser)
router.get('/:id', function(req, res, next) {
    productModel.findOne({_id:req.params.id}, function(err, product){
   
      if(err){
        next(err)
      }else{
        res.json({ status: 'success' , data : {product: product}});
      }
    });
    
});

/* GET products listing. */
router.get('/', function(req, res, next) {
  productModel.find({}, function(err, products){
 
    if(err){
      next(err)
    }else{
      res.json({ status: 'success' , data : {products: products}});
    }
  });
  
});


router.post('/', function(req, res, next) {
    try{
    productModel.create({
       name: req.body.name, 
       unit: req.body.unit, 
       quantity: req.body.quantity,
       price: req.body.price,
       image: req.body.image
       
     }, (err, result)=>{
      console.log("llego")
       if(err){
         res.status(400).json({status: "error", message: err});
       }
         res.json({status: "success", message: "product added!!", data: result});    
    })
   }catch(error){
     res.status(500).json({status: "error", error: error});
   }
 
});

router.put('/:id', function(req, res, next){
  productModel.updateOne({_id:req.params.id}, {
    name: req.body.name, 
    unit: req.body.unit, 
    quantity: req.body.quantity,
    price: req.body.price,
    image: req.body.image
    }, function(err, productInfo){
      if(err)
        next(err);
      else{
        res.json({status:"success", message: "product updated successfully", data: productInfo});
      }
  });
});


router.delete('/:id', function(req, res, next) {
  productModel.deleteOne({_id:req.params.id}, function(err, productInfo){
    if(err)
      next(err);
    else{
      res.json({status:"success", message: "product deleted successfully", data: productInfo});
    }
});
});

module.exports = router;
