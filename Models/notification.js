const mongoose = require('mongoose')

const notificationSchema = new mongoose.Schema({
    notificationMessage: {type: String, require: true},
    notification_creation_date: { type: String, require: true },
    sender: { type: String, require: true }
})

module.exports = mongoose.model('notification', notificationSchema);