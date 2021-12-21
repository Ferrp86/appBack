const { getEventsById, addEventUser } = require('../../models/evento.model');
const { checkToken } = require('../middlewares');

const router = require('express').Router();

router.get('/:id', async (req, res) => {
    try {
        const event = await getEventsById(req.params.id);
        res.json(event);
    }
    catch (err) {
        res.json({ err: err.message });
    }
})

router.post('/', checkToken, async (req, res) => {
    console.log(req.body);
    try {
        const event = await addEventUser(req.body.id, req.user.id);
        res.json(event);
    }
    catch (err) {
        res.json({ err: err.message });
    }
})

module.exports = router;