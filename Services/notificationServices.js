const Notifications = require('../Models/notification');

const getNotification = async() => {
    const allNotification = await Notifications.find();
    return allNotification
}

const postNotification = async(message, date, sender) => {
    const newNotification = new Notifications({
        notificationMessage: message,
        notification_creation_date: date,
        sender: sender
    })
    newNotification.save()
    return newNotification
}

module.exports = { getNotification , postNotification}