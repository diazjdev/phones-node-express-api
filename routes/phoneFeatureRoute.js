const express = require('express');
const app = express();
const phoneFeatureRoute = express.Router();

const phoneFeatureController = require('../controllers/phoneFeatureController');
const BASE_ROUTE = 'phoneFeatures';

phoneFeatureRoute.get(`/${BASE_ROUTE}`, phoneFeatureController.getPhoneFeatures);
phoneFeatureRoute.get(`/${BASE_ROUTE}/:id`, phoneFeatureController.getPhoneFeature);


module.exports = phoneFeatureRoute;
