const bcrypt = require('bcryptjs');

const router = require('express').Router();
const { createUser, getUser } = require('../../models/usuario.model');
const { createToken } = require('../../utils');

router.post('/login', async (req, res) => {
    let usuario;
    try {
        usuario = await getUser(req.body);
    } catch (err) {
        res.json({ error: err.message });
    }

    if (!usuario) {
        return res.json({ Error: 'Email o password incorrectos' });
    }
    res.json({ token: createToken(usuario), username: usuario.nombre_usuario });
});

router.post('/registro', async (req, res) => {
    try {
        req.body.password = bcrypt.hashSync(req.body.password);

        const result = await createUser(req.body);
        res.json(result);
    } catch (err) {
        res.json({ error: err.message });
    }
});

module.exports = router;