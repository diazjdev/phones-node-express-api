const express = require('express');
const app = express();

// Phones Route
const phonesRoute = require('./phonesRoute');

// Phone Features Route
const phoneFeatureRoute = require('./phoneFeatureRoute')


module.exports = { phonesRoute, phoneFeatureRoute };
