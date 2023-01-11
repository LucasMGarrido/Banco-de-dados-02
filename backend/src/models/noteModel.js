const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const noteSchema = new Schema({
    id: ObjectId,
    title: String,
    content: String
});

const noteModel = mongoose.model('notes', noteSchema);

module.exports = noteModel;