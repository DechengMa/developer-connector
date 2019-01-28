const express = require('express');
const router = express.Router();

// app.use('/api/users', users); So, url is /api/users/test
// @route   GET api/posts/test
// @desc    Tests post route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'Posts Works' }));

module.exports = router;
