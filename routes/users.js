const express = require('express');
const router = express.Router();

const { register, login } = require('../controllers/userController');

router.post('/login', login);

router.post('/register', register);

router.get('/', (req, res) => {
  res.send('Welcome');
});

module.exports = router;
