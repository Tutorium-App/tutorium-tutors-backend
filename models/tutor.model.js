const mongoose = require('mongoose');
const db = require('../config/db');
const { Schema } = mongoose;

const tutorSchema = new Schema({
    tutorID: {
        type: String,
    },
    fullName: {
        type: String,
    },
    email: {
        type: String,
    },
    phone: {
        type: String,
    },
    dateCreated: {
        type: String,
    },
    school: {
        type: String,
    },
    program: {
        type: String,
    },
    year: {
        type: String,
    },
    about: {
        type: String,
    },
    balance: {
        type: Number,
    },
    rating: {
        type: Number,
    },
    verified: {
        type: String,
    },
    profilePhotoLink: {
        type: String,
    }
});

const tutorModel = db.model('Tutors', tutorSchema);

module.exports = tutorModel;
