const express = require('express');
const app = express();
const request = require('request');
const port = 3000;

app.get('/results', (req, res) =>
	request('http://www.omdbapi.com/?s=guardians+of+the+galaxy&apikey=thewdb', function(
		error,
		response,
		body
	) {
		const results = JSON.parse(body);
		res.send(results['Search'][0]['Title']);
	})
);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

// &apikey=thewdb
