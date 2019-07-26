const express = require('express');
const app = express();
const request = require('request');
const port = 3000;

app.set('view engine', 'ejs');

app.get('/results', (req, res) =>
	request('http://www.omdbapi.com/?s=guardians+of+the+galaxy&apikey=thewdb', function(
		error,
		response,
		body
	) {
		const data = JSON.parse(body);
		res.render('results', { data: data });
	})
);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

// &apikey=thewdb
