const mongoose = require('mongoose');
const db = require('../config/db');
const { Schema } = mongoose;

const acceptedTutorialRequestSchema = new Schema({
    studentID: {
        type: String,
    },
    studentRequestID: {
        type: String,
    },
    studentName: {
        type: String,
    },
    studentEmail: {
        type: String,
    },
    tutorID: {
        type: String,
    },
    tutor: {
        type: String,
    },
    tutorNumber: {
        type: String,
    },
    tutorEmail: {
        type: String,
    },
    role: {
        type: String,
    },
    requestType: {
        type: String,
    },
    description: {
        type: String,
    },
    budget: {
        type: String,
    },
    validUntil: {
        type: String,
    },
    amount: {
        type: Number,
    },
    school: {
        type: String,
    }
});

const acceptedTutorialRequestModel = db.model('AcceptedTutorialRequest', acceptedTutorialRequestSchema);

module.exports = acceptedTutorialRequestModel;
