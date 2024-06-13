const updateMessageReceived = require('../../../controllers/message/messagesReceived/updateMessageRecived')

const updateMessageReceivedHandler = async (req, res) => {
    const{chatId, text, name, fromData, payload, timestamp, responded, active, state, received, contactId, userId, socialMediaId } = req.body;
    const {id} = req.params
    
    try {
        if(!id || !chatId || !text || !name || !fromData || !payload || !timestamp || !responded || !active || !state || !received || !contactId || !socialMediaId ) throw new Error('Missing Data');
        await updateMessageReceived(id, chatId, text, name, fromData, payload, timestamp, responded, active, state, received, contactId, userId, socialMediaId);
        res.status(201).send('Congratulations! The message has been updated!')    
    } catch (error) {
        res.status(500).json({error: error.message})
    }
};

module.exports = updateMessageReceivedHandler;