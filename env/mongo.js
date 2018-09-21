// Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb://neocloud:pass@localhost:27017/linkcenter';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));