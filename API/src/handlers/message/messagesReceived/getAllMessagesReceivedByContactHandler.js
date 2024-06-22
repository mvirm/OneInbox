const {getAllMessagesReceivedByContact} = require('../../../controllers/message/messagesReceived/getAllMessagesReceivedByContact');
//chequear bien xq no muestra el error de not found, entra directo al code 500
const getAllMessagesReceivedByContactHandler = async (req, res) => {
    const {contactId} = req.params;
    if(!contactId) throw new Error('Missing Contact ID');
    try {
        const allMessages = await getAllMessagesReceivedByContact(contactId);
        !allMessages.length ? res.status(400).send('Messages not found') : res.status(200).json(allMessages); 
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

module.exports = {getAllMessagesReceivedByContactHandler};