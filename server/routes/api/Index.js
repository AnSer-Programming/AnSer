const router = require('express').Router();

const users = require('./Users');
const ticket = require('./Tickets');
const rolodex = require('./Rolodex');
router.use('/users', users);
router.use('/ticket', ticket);
router.use('/rolodex', rolodex);

module.exports = router;