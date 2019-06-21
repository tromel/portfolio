const mongo = require('mongodb');
const Shema = mongodb.Schema;

const Schema = new Schema ({
    name: {type: String, required: true},
    email: {type: String, required: true},
    message: {type: String, required: true},
});

module.exports = mongodb.model('Message', Schema);