const deleteMessageSent = require('../../../controllers/message/messagesSent/deleteMessageSent');

const deleteMessageSentHandler= async(req,res) =>{
    const{id} = req.params
    if(!id) throw new Error('Message not found')
    try {
        await deleteMessageSent(id)
        return res.status(200).send('The message has been deleted')
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
};

module.exports = deleteMessageSentHandler