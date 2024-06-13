const getMessageSentById = require('../../../controllers/message/messagesSent/getMessageSentById');

const getMessageSentByIdHandler = async (req, res) => {
    const {id} = req.params;
    try {
        if(!id) throw new Error('Missing ID');
        const message = await getMessageSentById(id);
        !message ? res.status(400).send('Message not found') : res.status(200).json(message); 
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

module.exports = getMessageSentByIdHandler;