const Events = require('../Models/event');

const getEvents = async() => {
    const allEvents = await Events.find();
    return allEvents
}

const postEvents = async(title, date, hashtag) => {
    const newEvent = new Events({
        eventTitle: title,
        event_creation_date: date,
        hastag: hashtag
    })
    newEvent.save()
    return newEvent
}

module.exports = { getEvents , postEvents}