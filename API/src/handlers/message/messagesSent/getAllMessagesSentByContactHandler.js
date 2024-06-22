const {getAllMessagesSentByContact} = require('../../../controllers/message/messagesSent/getAllMessagesSentByContact');

const getAllMessagesSentByContactHandler = async (req, res) => {
    const {contactId} = req.params;
    try {
        if(!contactId) throw new Error('Missing Contact ID');
        const allMessages = await getAllMessagesSentByContact(contactId);
        !allMessages ? res.status(400).send('Messages not found') : res.status(200).json(allMessages); 
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

module.exports = {getAllMessagesSentByContactHandler};