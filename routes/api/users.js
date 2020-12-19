const router = require('express').Router();
const userController = require('../../Controllers/UserController.js');
const auth = require('../../middlewares/auth');

router.get('/list', auth.verifyUsuario, userController.list);
router.post('/register', auth.verifyUsuario, userController.register);
router.put('/update', auth.verifyUsuario, userController.update);

router.post('/login', userController.login);

module.exports = router;