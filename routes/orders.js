var express = require('express');
var router = express.Router();
const orderModel = require('../models/order');
const middlewares = require('../middlewares')

router.use(middlewares.validateUser)

router.get('/:id', function(req, res, next) {
    orderModel.findOne({_id:req.params.id}, function(err, order){
   
      if(err){
        next(err)
      }else{
        res.json({ status: 'success' , data : {order: order}});
      }
    });
    
  });

  //obtener orden por mesa
  router.get('/table/:id', function(req, res, next) {
    orderModel.findOne({table:req.params.id}).populate('table').exec( function(err, order){
   
      if(err){
        next(err)
      }else{
        res.json({ status: 'success' , data : {order: order}});
      }
    });
    
  });
/* GET orders listing. */
router.get('/', function(req, res, next) {
  orderModel.find({}, function(err, orders){
 
    if(err){
      next(err)
    }else{
      res.json({ status: 'success' , data : {orders: orders}});
    }
  });
  
});


router.post('/', function(req, res, next) {
    try{
    orderModel.create({
       table: req.body.table, 
       products: req.body.products, 
       dishes: req.body.dishes,
       total:req.body.total,
       clients: req.body.clients
       
     }, (err, result)=>{
      console.log("llego")
       if(err){
         res.status(400).json({status: "error", message: err});
       }
         res.json({status: "success", message: "order added!!", data: result});    
    })
   }catch(error){
     res.status(500).json({status: "error", error: error});
   }
 
});

router.put('/:id', function(req, res, next){
  //console.log(req.body)
  //console.log(req.params.id,)
  orderModel.findOneAndUpdate(req.params.id, {
        table: req.body.table, 
        products: req.body.products== undefined ? []:JSON.parse(req.body.products), 
        dishes:{$set: req.body.dishes} ,
        total:req.body.total,
        clients: req.body.clients,
        tip:req.body.tip
    }, function(err, orderInfo){
      console.log("llego")
      if(err){
        console.log(err)
        next(err);
      }else{
      
        res.json({status:"success", message: "order updated successfully", data: orderInfo});
      }
  });
});

//cerrar orden
router.put('/:id/paid', function(req, res, next){
  orderModel.findOneAndUpdate(req.params.id, {
        is_active:false
    }, function(err, orderInfo){
      if(err)
        next(err);
      else{
        res.json({status:"success", message: "order updated successfully", data: orderInfo});
      }
  });
});

/*router.put('/:id/add-product', function(req, res, next){

  orderModel.findOne({_id:req.params.id}, function(err, order){
   
    if(err){
      next(err)
    }else{
      orderModel.findOneAndUpdate(req.params.id, {
        table: req.body.table, 
        products: req.body.products, 
        dishes: req.body.dishes,
        total:req.body.total
    }, function(err, orderInfo){
      if(err)
        next(err);
      else{
        res.json({status:"success", message: "order updated successfully", data: orderInfo});
      }
  });
    }
  });
  
});*/


router.delete('/:id', function(req, res, next) {
  orderModel.findOneAndDelete(req.params.id, function(err, orderInfo){
    if(err)
      next(err);
    else{
      res.json({status:"success", message: "order deleted successfully", data: orderInfo});
    }
});
});

module.exports = router;
