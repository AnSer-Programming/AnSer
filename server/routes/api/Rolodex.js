const router = require('express').Router();

router.get('/', async (req, res) => {
  try {
    const users = require('../../json/rolodex.json');

    JSON.stringify(users);

    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;