const mongoose = require('mongoose')


const bookSchema = mongoose.Schema({
    Name: {
        type: String,
        required: true,

    },
    ThumbnailUrl: {
        type: String,
        required: true,
    },
    Description: {
        type: String,
        required: true
    },
    Author: {
        type: String,
        required: true,

    },
    NoOfReads: {
        type: Number,
        required: true,
    },
    PagesNo: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Book', bookSchema)