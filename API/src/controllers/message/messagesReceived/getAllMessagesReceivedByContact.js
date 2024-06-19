const { Contact, User, Business, MsgReceived,  MsgSent } = require('../../../db');
const numberIdvalidation = require('../../../utils/numberIdvalidation')

const getAllMessagesReceivedByContact = async (id) => {
    const contactId = numberIdvalidation(id)
    const msgReceived = await MsgReceived.findAll(
        { 
        where: {contactId},
        order: [
            ['timestamps']
        ],
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
    ]});

    if(!msgReceived)  throw new Error (`Messages Received not found`);
    return msgReceived;
};

module.exports = getAllMessagesReceivedByContact;