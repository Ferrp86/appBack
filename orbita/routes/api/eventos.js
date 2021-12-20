const { getEventsById } = require('../../models/evento.model');

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

module.exports = router;