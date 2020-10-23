/*

	Here I define functions to be used in my routes for general purpose pages like index, about and contact

*/
const index = (req, res) => {
	return view('index');
};

const about = (req, res) => {
	return view('about')
};

const contact = (req, res) => {
	return view('contact')
};
