const { MsgReceived } = require('../../../db');

const updateFileMessagesReceived = async (id) => {
    if(!id) throw new Error('Missing Id')
    const message = await MsgReceived.findByPk(id);
    if(!message) {
        throw new Error (`Message Received  with Id ${id} not found`);
    } else {
        message.state = 'Archivado'
        await message.send();
        return(`Congratulation! The Message Received with ID ${id} has been filed`)
    }
    
};

module.exports = updateFileMessagesReceived;