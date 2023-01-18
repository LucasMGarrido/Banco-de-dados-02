const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const noteSchema = new Schema({
    title: String,
    content: String
});

const noteModel = mongoose.model('notes', noteSchema);

module.exports = noteModel;