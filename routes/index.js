//const routerx = require('express-promise-router');
const router = require('express').Router();
const articuloRouter = require('./api/articulo');
const usersRouter = require('./api/users');
const categoriaRouter = require('./api/categoria');


//const router = routerx();
//router.use('/usuario', articuloRouter);
router.use('/usuario', usersRouter);
router.use('/categoria', categoriaRouter);
router.use('/articulo', articuloRouter);

module.exports = router;