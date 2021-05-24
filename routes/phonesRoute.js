const express = require('express');
const phonesRoute = express.Router();
const phoneController = require('../controllers/phonesController');

const BASE_ROUTE = 'phones';

const testCb = (req, res, next) => {
	res.json({ "message": "Hola! We are smartfons" })
}

// TEST ENDPOINT
phonesRoute.get("/", testCb);

phonesRoute.get(`/${BASE_ROUTE}`, phoneController.getPhones);
phonesRoute.get(`/${BASE_ROUTE}/:id`, phoneController.getPhone);
phonesRoute.post(`/${BASE_ROUTE}/`, phoneController.createPhone);
phonesRoute.put(`/${BASE_ROUTE}/:id`, phoneController.updatePhone);

module.exports = phonesRoute;
