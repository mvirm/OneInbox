const getAllMessages = require('../../../controllers/message/allMessages/getAllMessages')

const getAllMessagesHandler = async(req, res) => {
    try {
        const allMessages = await getAllMessages()
        !allMessages ? res.status(400).send('Messages not found') : res.status(200).json(allMessages)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
};

module.exports = getAllMessagesHandler;