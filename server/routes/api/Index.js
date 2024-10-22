const router = require('express').Router();

const users = require('./Users');
router.use('/users', users);

module.exports = router;