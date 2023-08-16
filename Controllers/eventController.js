const EventServices = require('../Services/eventServices');

const getEvents = async(req,res) => {
    try {
        const eventResponse = await EventServices.getEvents();
        res.status(200).json({
            success: true,
            message: "Events fetched successfully!!",
            events: eventResponse
        }) 
    } catch(error) {
        console.log(error)
    }
}

const postEvents = async(req, res) => {
    const { title, date, hashtag } = req.body
    try {
        const newEventResponse = await EventServices.postEvents(title, date, hashtag)
        res.status(200).json({
            success: true,
            message: 'Event posted successfully!!',
            event: newEventResponse
        })
    } catch(error) {
        console.log(error)
    }
}

module.exports = { getEvents, postEvents }