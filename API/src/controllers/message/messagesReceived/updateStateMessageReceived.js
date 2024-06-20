const { MsgReceived } = require('../../../db');

const updateStatusMessagesReceived = async (id) => {
    if(!id) throw new Error('Missing Id')
    const message = await MsgReceived.findByPk(id);
    if(!message)  throw new Error (`Messages Received  with Id ${id} not found`);
    if(message.state === 'Archivados') throw new Error (`Messages Received  with Id ${id} hasn't been update`)
    message.state === 'No Leidos' ? message.state = 'Leidos' : message.state = 'Respondidos'
    
    await message.send();
    return(`Congratulation! The state from Message Received with ID ${id} has been update`)
};

module.exports = updateStatusMessagesReceived;