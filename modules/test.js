const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let TestSchema = new Schema({
    msg: {type: String, required: true},
});

// Export the m   odel
module.exports = mongoose.model('test', TestSchema);