const {updateFileMessageReceived }= require('../../../controllers/message/messagesReceived/updateFileMessageReceived')

const updateFileMessageReceivedHandler = async (req, res) => {
    const {id} = req.params
    
    try {
        if(!id) throw new Error('Missing Data');
        await updateFileMessageReceived(id);
        res.status(201).send('Congratulations! The state of the message has been updated!')    
    } catch (error) {
        res.status(500).json({error: error.message})
    }
};

module.exports = {updateFileMessageReceivedHandler};