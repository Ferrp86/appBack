const router = require('express').Router();

const apiUsuariosRouter = require('./api/usuarios');
const { checkToken } = require('./middlewares');

router.use('/usuarios', apiUsuariosRouter);

module.exports = router;