const { MsgSent } = require('../../../../db');

const updateMessageSent = async (id, toData, message, timestamps, userId) => {
    if(!id) throw new Error('Missing ID')
    
    const messageToUpdate = await MsgSent.findByPk(id);

    if (!messageToUpdate) {
        throw new Error(`Message with Id ${id} not found`)
    } else {
        messageToUpdate.toData = toData,
        messageToUpdate.message = message,
        messageToUpdate.timestamps = timestamps,
        messageToUpdate.userId = userId,

        await userToUpdate.save()
        return (`Congratulation! The Message Sent with ID ${id} has been update`)
    }
}

module.exports = updateMessageSent;