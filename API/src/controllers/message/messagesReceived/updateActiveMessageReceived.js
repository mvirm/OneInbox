const { MsgReceived } = require('../../../db');

const updateFileMessagesReceived = async (id) => {
    if(!id) throw new Error('Missing Id')
    const msgReceived = await MsgReceived.findByPk(id);
    if(!msgReceived) {
        throw new Error (`Messages Received  with Id ${id} not found`);
    } else {
        msgReceived.active = !msgReceived.active
        await msgReceived.send();
    }
    
};

module.exports = updateFileMessagesReceived;