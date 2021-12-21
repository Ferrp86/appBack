const jwt = require('jsonwebtoken');
const { getUserById } = require('../models/usuario.model');

const checkToken = async (req, res, next) => {

    if (!req.headers['authorization']) {
        return res.status(401).json({ error: 'Debes incluir la cabecera de autorización' });
    }

    const token = req.headers['authorization'];

    let obj;
    try {
        obj = jwt.verify(token, process.env.SECRET_KEY);
    } catch (err) {
        return res.status(401).json({ error: 'El token es erroneo' });
    }

    const usuario = await getUserById(obj.usuarioId);
    req.user = usuario;
    console.log(req.user);
    next();
}

module.exports = { checkToken };