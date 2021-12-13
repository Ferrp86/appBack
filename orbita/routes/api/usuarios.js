const router = require('express').Router();
const { createUser, getUser } = require('../../models/usuario.model');

router.post('/login', async (req, res) => {
    let result;
    try {
        result = await getUser(req.body);
    } catch (err) {
        res.json({ error: err.message });
    }

    if (!result) {
        return res.json({ Error: 'Email o password incorrectos' });
    }
    res.json(result);
});

router.post('/registro', async (req, res) => {
    try {
        const result = await createUser(req.body);
        res.json(result);
    } catch (err) {
        res.json({ error: err.message });
    }
});

module.exports = router;