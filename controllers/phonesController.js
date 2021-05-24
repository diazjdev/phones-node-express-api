
'user strict'
const config = require('../config/config');
const db = config.DB;

const Phone = require('../models/phone');

// GET ALL
const getPhones = (async (req, res) => {
	db.all("SELECT * FROM phones", [], (err, rows) => {
		if (err) {
			res.status(400).json({ "error": err.message });
			return;
		}

		const phones = rows.map(row => new Phone(row));
		res.status(200).json(phones);
	});
});

// GET ONE
const getPhone = (async (req, res) => {
	const params = [req.params.id];
	const sql = `SELECT * FROM phones WHERE id = ?`;

	db.get(sql, params, (err, row) => {
		if (err) {
			res.status(400).json({ "error": err.message });
			return;
		}

		if (!row) {
			res.status(400).json({ "error": 'No Phone found' });
			return;
		}

		const phone = new Phone(row);
		res.status(200).json(phone);
	});
});

// CREATE ONE
const createPhone = (req, res) => {
	const sql = `INSERT INTO phones 
	(name, description, manufacturer, price, screen, ram, color, imageFileName, processor) 
	VALUES (?,?,?,?,?,?,?,?,?)`;

	const { name, description, manufacturer, price, screen, ram, color, imageFileName, processor } = req.body;
	const params = [name, description, manufacturer, price, screen, ram, color, imageFileName, processor];

	try {
		db.run(sql, params, (err, row) => {
			if (err) {
				res.status(400).json({ "error": err.message });
				return;
			}
			res.status(200).json({ last_id: db.last_id, row });
		});

	}
	catch (error) {

		res.status(400).json({ "error": err.message });

	}
}

// UPDATE
function updatePhone(req, res) {
	const sql = `UPDATE  phones 
	SET
		name = ?, 
		description = ?, 
		manufacturer = ?, 
		price = ?, 
		screen = ?, 
		ram = ?,
		color = ?, 
		imageFileName = ?, 
		processor = ?
	WHERE id = ?`;

	const phone = new Phone({ ...req.body });

	const { name, description, manufacturer, price, screen, ram, color, imageFileName, processor } = req.body;
	const params = [phone.name, description, manufacturer, price, screen, ram, color, imageFileName, processor, req.params.id];


	db.run(sql, params, (err, row) => {
		if (err) {
			res.status(400).json({ "error": err.message });
			return;
		}

		const updatedPhone = new Phone({ ...req.body });

		res.status(200).json({ ...updatedPhone });
	});

}

// DELETE
const deletePhone = (req, res) => {
	db.run(`DELETE FROM phones WHERE id = ?`,
		req.params.id,
		function (err, result) {
			if (err) {
				res.status(400).json({ "error": res.message })
				return;
			}
			res.status(200).json({ deletedID: this.changes })
		});
}

module.exports = {
	getPhone,
	getPhones,
	createPhone,
	updatePhone,
	deletePhone
}
