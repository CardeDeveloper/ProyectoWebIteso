var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/admin/mesas', function(req, res, next) {
  res.render('admin/lista-mesas');
});

router.get('/admin/mesas/editar', function(req, res, next) {
  res.render('admin/mesa-editar');
});

router.get('/admin/mesas/nueva', function(req, res, next) {
  res.render('admin/mesa');
});

router.get('/admin/ordenes', function(req, res, next) {
  res.render('admin/lista-ordenes');
});
router.get('/admin/ordenes/editar', function(req, res, next) {
  res.render('admin/orden-editar');
});

router.get('/admin/ordenes/nueva', function(req, res, next) {
  res.render('admin/orden');
});

router.get('/admin/productos', function(req, res, next) {
  res.render('admin/lista-productos');
});
router.get('/admin/productos/editar', function(req, res, next) {
  res.render('admin/producto-editar');
});

router.get('/admin/productos/nuevo', function(req, res, next) {
  res.render('admin/producto');
});

router.get('/admin/ingredientes', function(req, res, next) {
  res.render('admin/lista-ingredientes');
});
router.get('/admin/ingredientes/editar', function(req, res, next) {
  res.render('admin/ingrediente-editar');
});

router.get('/admin/ingredientes/nuevo', function(req, res, next) {
  res.render('admin/ingrediente');
});

router.get('/admin/platillos', function(req, res, next) {
  res.render('admin/lista-platillos');
});
router.get('/admin/platillos/editar', function(req, res, next) {
  res.render('admin/platillo-editar');
});

router.get('/admin/platillos/nuevo', function(req, res, next) {
  res.render('admin/platillo');
});

router.get('/orden', function(req, res, next) {
  res.render('orden');
});
router.get('/ordenes', function(req, res, next) {
  res.render('ordenes-mesero');
});

router.get('/mesa/nueva', function(req, res, next) {
  res.render('admin/mesa');
});


router.get('/platillo', function(req, res, next) {
  res.render('platillosVistaIndividual');
});

router.get('/producto', function(req, res, next) {
  res.render('productoVistaIndividual');
});


router.get('/ingrediente', function(req, res, next) {
  res.render('admin/agregarIngrediente');
});

module.exports = router;
