const express = require('express');
const app = express();
const request = require('request');
const port = 3000;

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
	res.render('search'); //renders to route page
});

app.get('/results', (req, res) => {
	const query = req.query.search;
	let url = 'http://www.omdbapi.com/?s=' + query + '&apikey=thewdb';
	request(url, function(error, response, body) {
		const data = JSON.parse(body);
		res.render('results', { data: data });
	});
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

// &apikey=thewdb
