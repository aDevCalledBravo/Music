/*

	Here I define functions to be used in my routes for songs related purposes

*/
const songs = (req, res) => {
	res.render('songs');
};

const showSong = (req, res) => {
	res.render('about')
};

const download = (req, res) => {
	res.render('contact')
};

module.exports = { songs, showSong, download };
