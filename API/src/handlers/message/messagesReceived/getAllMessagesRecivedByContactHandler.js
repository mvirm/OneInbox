const getAllMessagesReceivedByContact = require('../../../controllers/message/messagesReceived/getAllMessagesReceivedByContact');

const getAllMessagesReceivedByContactHandler = async (req, res) => {
    const {contactId} = req.params;
    try {
        if(!contactId) throw new Error('Missing Contact ID');
        const allMessages = await getAllMessagesReceivedByContact(contactId);
        !allMessages ? res.status(400).send('Messages not found') : res.status(200).json(allMessages); 
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

module.exports = getAllMessagesReceivedByContactHandler;