const { MsgReceived } = require('../../../db');

const updateStatusMessagesReceived = async (id) => {
    if(!id) throw new Error('Missing Id')
    const msgReceived = await MsgReceived.findByPk(id);
    if(!msgReceived)  throw new Error (`Messages Received  with Id ${id} not found`);
    msgReceived.state === 'No Leidos' ? msgReceived.state = 'Leidos' : msgReceived.state = 'Respondidos'
    
    await msgReceived.send();
};

module.exports = updateStatusMessagesReceived;