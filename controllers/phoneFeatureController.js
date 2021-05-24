
'user strict'
const config = require('../config/config');
const db = config.DB;

const PhoneFeature = require('../models/phoneFeature');
const TABLE_NAME = 'phoneFeatures';

// GET ALL
const getPhoneFeatures = (async (req, res) => {
	db.all(`SELECT * FROM ${TABLE_NAME}`, [], (err, rows) => {
		if (err) {
			res.status(400).json({ "error": err.message });
			return;
		}

		const phonesFeatures = rows.map(row => new PhoneFeature(row));
		res.status(200).json(phonesFeatures);
	});
});

// GET ONE
const getPhoneFeature = (async (req, res) => {
	const params = [req.params.id];
	const sql = `SELECT * FROM ${TABLE_NAME} WHERE id = ?`;

	db.get(sql, params, (err, row) => {
		if (err) {
			res.status(400).json({ "error": err.message });
			return;
		}

		if (!row) {
			res.status(400).json({ "error": 'No Phone found' });
			return;
		}

		const phoneFeature = new PhoneFeature(row);
		res.status(200).json(phone);
	});
});


module.exports = {
	getPhoneFeatures,
	getPhoneFeature,
}
