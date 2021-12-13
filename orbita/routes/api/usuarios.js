const router = require('express').Router();
const { createUser } = require('../../models/usuario.model');

router.post('/login', (req, res) => {
    try {
        res.json({ msg: 'hellou' })
    } catch (err) {
        res.json({ error: err.message });
    }
});

router.post('/registro', async (req, res) => {

    try {
        const result = await createUser(req.body);
        res.json(result);
    } catch (err) {
        console.log(err.message);
    }
});

module.exports = router;