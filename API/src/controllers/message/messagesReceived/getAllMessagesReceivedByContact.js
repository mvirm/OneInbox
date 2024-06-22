const { Contact, User, Business, MsgReceived,  MsgSent } = require('../../../db');
// const numberIdvalidation = require('../../../utils/numberIdvalidation')
//chequear bien xq no muestra el error de not found, entra directo al code 500
const getAllMessagesReceivedByContact = async (contactId) => {
    // const contactId = numberIdvalidation(id)
    if(!contactId) throw new Error('Missing Contact ID');
    const messagesReceived = await MsgReceived.findAll(
        { 
        where: {contactId},
        order: [
            ['timestamp']
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
        // {
        //     model: MsgSent,
        //     attribute: ['id', 'toData', 'message', 'timestamps', 'recieved', 'userId'],
        //     include: {
        //         model: User,
        //         attribute: ['id', 'name']
        //     }
        // }
    ]});

    if(!messagesReceived)  throw new Error ('Messages Received not found');
    return messagesReceived;
};

module.exports = {getAllMessagesReceivedByContact};