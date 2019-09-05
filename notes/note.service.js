const config = require('config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('_helpers/db');
const mongoose = require('mongoose');
const Note = db.Note;

module.exports = {
   
    getById,
    create,
    update,
    delete: _delete,
    searchByIds
};


async function getById(id) {
    return await Note.findById(id);
}

async function create(noteParam) {
    const note = new Note(noteParam);
     await note.save();  // save user
}

async function update(id, noteParam) {
    const note = await note.findById(id);
    Object.assign(note, noteParam);
    await user.save();
}

async function _delete(id) {
    await note.findByIdAndRemove(id);
}

async function searchByIds(ids) {
    ids = ids.map((item) => {
        return mongoose.Types.ObjectId(item)
    });
    return await Note.find({"_id" : { "$in" : ids }})
}