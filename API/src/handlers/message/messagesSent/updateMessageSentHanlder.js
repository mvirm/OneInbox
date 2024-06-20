// const updateMessageSent = require('../../../controllers/message/messagesSent/updateMessageSent')

// const updateMessageSentHandler = async (req, res) => {
//     const{toData, message, timestamps, userId} = req.body;
//     const {id} = req.params
    
//     try {
//         if(!id, !toData || !message || !timestamps || !userId) throw new Error('Missing Data');
//        await updateMessageSent(toData, message, timestamps, userId);
//         res.status(201).send('Congratulations! The message has been updated!')    
//     } catch (error) {
//         res.status(500).json({error: error.message})
//     }
// };

// module.exports = updateMessageSentHandler;