const { Contact, User, Business, MsgReceived,  MsgSent } = require('../../../../db');

const getMessagesReceivedById = async (id) => {
    if(!id) throw new Error('Missing Id')
    const message = await MsgReceived.findByPk(id, {
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
    if(!message)  throw new Error (`Message Received with Id ${id} not found`);
    return message;
};

module.exports = getMessagesReceivedById;