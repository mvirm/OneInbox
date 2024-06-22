const {MsgSent} = require('../../../db');

    const createMessageSent = async (toData, message, timestamps, received, businessId, contactId, msgReceivedId, userId ) => {

        const [newMessage, created] = await MsgSent.findOrCreate({
            where: {
               toData,
               message,
               timestamps,
               received
            }
        })
        
        await newMessage.setBusiness(businessId);
        await newMessage.addContact(contactId);
        await newMessage.addMsgReceived(msgReceivedId);
        await newMessage.setUser(userId);

        return newMessage;
    }

module.exports = {
    createMessageSent
}