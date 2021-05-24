
'user strict'
const config = require('../config/config');
const db = config.DB;

const User = require('../models/user');

const getUsers = (async (req, res) => {
	db.all("SELECT * FROM users", [], (err, rows) => {
		if (err) {
			res.status(400).json({ "error": err.message });
			return;
		}

		const users = rows.map(row => new User(row));
		res.status(200).json(users);
	});
});

const getUser = (async (req, res) => {
	const params = [req.params.id];
	const sql = `SELECT * FROM users WHERE id = ?`;



	db.get(sql, params, (err, row) => {
		if (err) {
			res.status(400).json({ "error": err.message });
			return;
		}

		if (!row) {
			res.status(400).json({ "error": 'No user found' });
			return;
		}

		const user = new User(row);
		res.status(200).json(user);
	});
});

module.exports = {
	getUsers,
	getUser,
}
