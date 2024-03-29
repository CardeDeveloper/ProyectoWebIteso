var express = require('express');
var router = express.Router();
const tableModel = require('../models/table');
const middlewares = require('../middlewares')

router.use(middlewares.validateUser)

router.get('/:id', function(req, res, next) {
    tableModel.findOne({_id:req.params.id}, function(err, table){
   
      if(err){
        next(err)
      }else{
        res.json({ status: 'success' , data : {table: table}});
      }
    });
    
  });
/* GET tables listing. */
router.get('/', function(req, res, next) {
  tableModel.find({}, function(err, tables){
 
    if(err){
      next(err)
    }else{
      res.json({ status: 'success' , data : {tables: tables}});
    }
  });
  
});


router.post('/', function(req, res, next) {
    try{
    tableModel.create({
       number: req.body.number, 
       reference: req.body.reference, 
       seats: req.body.seats
       
     }, (err, result)=>{
      //console.log("llego")
       if(err){
         res.status(400).json({status: "error", message: err});
       }
         res.json({status: "success", message: "table added!!", data: result});    
    })
   }catch(error){
     res.status(500).json({status: "error", error: error});
   }
 
});

router.put('/:id', function(req, res, next){
  tableModel.updateOne({_id:req.params.id}, {
        number: req.body.number, 
        reference: req.body.reference, 
        seats: req.body.seats
    }, function(err, tableInfo){
      if(err)
        next(err);
      else{
        res.json({status:"success", message: "table updated successfully", data: tableInfo});
      }
  });
});


router.delete('/:id', function(req, res, next) {
  tableModel.deleteOne({_id:req.params.id}, function(err, tableInfo){
    if(err)
      next(err);
    else{
      res.json({status:"success", message: "table deleted successfully", data: tableInfo});
    }
});
});

module.exports = router;
