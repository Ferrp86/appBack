const router = require('express').Router();

const apiUsuariosRouter = require('./api/usuarios');
const apiLocalRouter = require('./api/locales');

const { checkToken } = require('./middlewares');

router.use('/usuarios', apiUsuariosRouter);
router.use('/locales', apiLocalRouter);

module.exports = router;