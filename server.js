const express = require('express');
const bodyParser = require('body-parser');
const moment = require('moment');


const app = express();

app.use(express.static('client'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/:entry', (req, res) => {
	const date = moment(req.params.entry, ['x', 'MMMM DD YYYY']);
	let natural = date.format('MMMM DD, YYYY');
	let unix = date.format('x');

	if(natural === 'Invalid date') {
		natural = unix = null;
	}

	res.json({ natural, unix });
});


app.listen(process.env.PORT || 3000);