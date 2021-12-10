const router = require('express').Router();

router.post('/', (req, res) => {
    try {
        res.send('Funciona!');

    } catch (err) {
        res.json({ error: err.message });
    }
});

module.exports = router;