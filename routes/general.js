const express = require('express');
const router = express.Router();

const { index, about, contact } = require('../controllers/generalController');

router.get('/', (req, res) => {
	res.render("index");
});

module.exports = router;
