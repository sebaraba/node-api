const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    title: {
        required: true,
        type: String
    },
    description: {
        required: true,
        type: String
    },
    date: {
        required: false,
        type: Date
    }
})

module.exports = mongoose.model('Data', dataSchema)