const express = require('express');
const router = express.Router();

const { login, register, logout } = require('../controllers/userController');

router.get('/login', login);

router.get('/register', register);

router.get('/logout', logout);
