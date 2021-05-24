// EXPRESS
const express = require('express');
const app = express();
const cors = require('cors');
app.use(express.json());

// CONFIG
const config = require('./config/config');

// CORS
app.use(cors());

// ROUTES

const routes = require('./routes/routes');
app.use(`/${config.API_BASE_ROUTE}`, routes.phonesRoute);
app.use(`/${config.API_BASE_ROUTE}`, routes.phoneFeatureRoute);


app.listen(config.PORT, () => {
	console.log(`Example app listening at http://localhost:${config.PORT}`)
})
