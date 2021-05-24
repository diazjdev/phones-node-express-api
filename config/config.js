const sqlite3 = require('sqlite3');
const PORT = process.env.PORT || 3001;
const API_BASE_ROUTE = 'api';

const DB = new sqlite3.Database('./db/phones.db', (err) => {
	if (err) {
		console.log({ err })
	}

});


module.exports = {
	PORT,
	DB,
	API_BASE_ROUTE,
}
