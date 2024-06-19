const { Contact, User, Business, MsgReceived,  MsgSent } = require('../../../db');

const getMessagesReceivedById = async (id) => {
    if(!id) throw new Error('Missing Id')
    const msgReceived = await MsgReceived.findByPk(id, {
        include:[
        {
            model: Business,
            attributes: ['id', 'name']
        },
        {
            model: Contact,
            attributes: ['id', 'name', 'email', 'phone', 'notification'],
        },
        {
            model: MsgSent,
            attribute: ['id', 'toData', 'message', 'timestamps', 'recieved', 'userId'],
            include: {
                model: User,
                attribute: ['id', 'name']
            }
        }    
        ] 
    });
    if(!msgReceived)  throw new Error (`Messages Received  with Id ${id} not found`);
    return msgReceived;
};

module.exports = getMessagesReceivedById;