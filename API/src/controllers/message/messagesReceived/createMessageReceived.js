// const {MsgReceived} = require('../../db');

//     const createMessageReceived = async (chatId, text, name, fromData, payload, timestamp, active, state, received, businessId, contactId) => {

//         const [newMessage, created] = await MsgReceived.findOrCreate({
//             where: {
//                 chatId,
//                 text,
//                 name,
//                 fromData,
//                 payload,
//                 timestamp, 
//                 active, 
//                 state,
//                 received,
//             }
//         })
        
//         await newMessage.setBusiness(businessId);
//         await newMessage.setContact(contactId);
    

//         return newMessage;
//     };

module.exports = {createMessageReceived};