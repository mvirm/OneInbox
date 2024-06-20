// const getAllMessagesSentByUser = require('../../../controllers/message/messagesSent/getAllMessagesSentByUser');

// const getAllMessagesSentByUserHandler = async (req, res) => {
//     const {userId} = req.params;
//     try {
//         if(!userId) throw new Error('Missing User ID');
//         const allMessages = await getAllMessagesSentByUser(userId);
//         !allMessages ? res.status(400).send('Messages not found') : res.status(200).json(allMessages); 
//     } catch (error) {
//         res.status(500).json({error: error.message})
//     }
// }

// module.exports = getAllMessagesSentByUserHandler;