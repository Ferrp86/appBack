const router = require('express').Router();

const apiRegistroRouter = require('./api/registro');
router.use('/registro', apiRegistroRouter);
const apiLoginRouter = require('./api/login');
router.use('/login', apiLoginRouter);

module.exports = router;