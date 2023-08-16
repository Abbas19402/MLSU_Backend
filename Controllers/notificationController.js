const NotificationServices = require('../Services/notificationServices')

const getNotification = async(req,res) => {
    try {
        const notificationResponse = await NotificationServices.getNotification();
        res.status(200).json({
            success: true,
            message: "All Notifications fetched successfully!!",
            notification: notificationResponse
        }) 
    } catch(error) {
        console.log(error)
    }
}

const postNotifications = async(req, res) => {
    const { message, date, sender } = req.body
    try {
        const newNotificationResponse = await NotificationServices.postNotification(message, date, sender)
        res.status(200).json({
            success: true,
            message: 'Notification posted successfully!!',
            notification: newNotificationResponse
        })
    } catch(error) {
        console.log(error)
    }
}

module.exports = { getNotification, postNotifications }