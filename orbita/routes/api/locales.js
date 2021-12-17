const bcrypt = require('bcryptjs');
const { createEvent } = require('../../models/evento.model');

const router = require('express').Router();
const { getLocal, createLocal } = require('../../models/local.model');
const { createTokenLocal } = require('../../utils');


router.post('/login', async (req, res) => {
    let local;
    try {
        local = await getLocal(req.body);
    } catch (err) {
        res.json({ error: err.message });
    }

    if (!local) {
        return res.json({ Error: 'Usuario o password incorrectos' });
    }

    res.json({ token: createTokenLocal(local), local_name: local.nombre_local, local_desc: local.descripcion });
});

router.post('/registro', async (req, res) => {
    console.log(req.body);
    try {
        req.body.password = bcrypt.hashSync(req.body.password);

        const result = await createLocal(req.body);
        res.json(result);
    } catch (err) {
        res.json({ error: err.message });
    }
});

router.post('/perfilLocal', async (req, res) => {
    try {
        const result = await createEvent(req.body);
        res.json(result);
    } catch (err) {
        res.json({ error: err.message });
    }
});

module.exports = router;