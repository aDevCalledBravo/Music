/*

	Here I define functions to be used in my routes for general purpose pages like index, about and contact

*/
const index = (req, res) => {
	res.render('index');
};

const about = (req, res) => {
	res.render('about')
};

const contact = (req, res) => {
	res.render('contact')
};

module.exports = { index, about, contact };
