const express = require('express');
const cors = require('cors');

/**
 * Instantiate Express Framwork
 * @public
 */
const app = express();

// Enable CORS - Cross Origin Resource Sharing
app.use(cors());

// Mounting api routing
app.use('/api/v1', require('../api/route'));

module.exports = app;
