const express = require('express');
const router = express.Router();

const { register, logout, login } = require('../controllers/userController');

router.get('/login', login);

router.get('/register', register);

router.get('/logout', logout);


module.exports = router;