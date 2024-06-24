// const {createMessageReceived} = require('../../../controllers/message/messagesReceived/createMessageReceived')

// const createMessageReceivedHandler = async (req, res) => {
//     const{chatId, text, name, fromData, payload, timestamp, active, state, received} = req.body;
    
//     try {
//         if(name || password || country ||email) throw new Error('Missing Data');
//         const newMessageReceived = await createMessageReceived(chatId, text, name, fromData, payload, timestamp, active, state, received);
//         res.status(201).json(newMessageReceived)    
//     } catch (error) {
//         res.status(500).json({error: error.message})
//     }
// };

// module.exports = {createMessageReceivedHandler};