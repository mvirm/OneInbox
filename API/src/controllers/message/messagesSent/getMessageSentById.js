const { Contact, User, Business, MsgReceived,  MsgSent } = require('../../../db');

const getMessageSentById = async (id) => {
    if(!id) throw new Error('Missing ID')
    const message = await MsgSent.findByPk(id, { 
        include:[
            {
                model: Business,
                attributes: ['id', 'name']
            },
            {
                model: User,
                attributes: ['id', 'name'],
            },
            {
                model: MsgReceived,
                attribute: ['id', 'chatId', 'text', 'name', 'fromData','payload', 'timestamp', 'active', 'state', 'recieved', 'contactId'],
                include: {
                    model: Contact,
                    attribute: ['id', 'name', 'email', 'phone', 'notification']
                }
            }   
        ] 
    });
    if(!message)  throw new Error (`Message Sent with ID ${id} not found`);
    return message;
};

module.exports = {getMessageSentById};