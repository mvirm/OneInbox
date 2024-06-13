const createMessageSent = require('../../../controllers/message/messagesSent/createMessageSent')

const createMessageSentHandler = async (req, res) => {
    const{toData, message, timestamps, received, businessId, contactId, userId, msgReceivedId} = req.body;
    
    try {
        if(!toData || !message || !timestamps || !businessId || !contactId || !userId || !msgReceivedId) throw new Error('Missing Data');
        const newMessageSent = await createMessageSent(toData, message, timestamps, received, businessId, contactId, userId, msgReceivedId);
        res.status(201).json(newMessageSent)    
    } catch (error) {
        res.status(500).json({error: error.message})
    }
};

module.exports = createMessageSentHandler;