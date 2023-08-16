const mongoose = require('mongoose')

const eventSchema = new mongoose.Schema({
    eventTitle: { type: String, require: true },
    event_creation_date: { type: String, require: true },
    hastag: { type: String, require: true },
})

module.exports = mongoose.model('events', eventSchema)