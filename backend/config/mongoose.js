const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.set('debug', process.env.NODE_ENV === 'development');

mongoose.connection.on('error', (err) => {
	console.error(`MongoDB Connection Error ${err}`);
});

mongoose.connection.on('connected', () => {
	console.info('Connected To DB');
});

/**
 * Connect to mongo db
 * @returns {object} Mongoose connection
 * @public
 */
exports.Connect = () => {
	mongoose.connect(process.env.MOGO_URI);
	return mongoose.connection;
};
