const { MsgReceived } = require('../../../db');

const updateFileMessageReceived = async (id) => {
    if(!id) throw new Error('Missing Id')
    const message = await MsgReceived.findByPk(id);
    if(!message) {
        throw new Error (`Message Received  with Id ${id} not found`);
    } else {
        message.state = 'Archivados'
        await message.send();
        return(`Congratulation! The Message Received with ID ${id} has been filed`)
    }   
};

module.exports = {updateFileMessageReceived};