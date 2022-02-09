const mongoose = require('mongoose')
const { model, Schema } = mongoose

const newsSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: new Date()
    },
    important: Boolean
})

const News = model('News', newsSchema)

module.exports = News