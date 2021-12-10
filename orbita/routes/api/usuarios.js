const router = require('express').Router();

router.post('/login', (req, res) => {
    try {
        res.json({ msg: 'hellou' })
    } catch (err) {
        res.json({ error: err.message });
    }
});

module.exports = router;