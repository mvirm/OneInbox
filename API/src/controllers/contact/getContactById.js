const { Contact, User, Business, MsgReceived,  MsgSent } = require('../../db');
// const numberIdValidation = require('../../utils/numberIdvalidation');

const getContactById = async (id) => {
    // const contactId = await numberIdValidation(id)
    // const contact = await Contact.findbyPk(contactId, { s
    const contact = await Contact.findByPk(id, { 
        include:[
        {
            model: Business,
            attributes: ['id', 'name']
        },
        // {
        //     model: MsgReceived,
        //     attributes: ['id', 'chatId', 'text', 'name', 'fromData', 'payload', 'timestamp', 'active', 'state', 'received','msgSentId'],
        //     include: {
        //         model: MsgSent,
        //         attribute: ['id', 'toData', 'message', 'timestamps', 'received', 'userId'],
        //         include: {
        //             model: User,
        //             attribute: ['id', 'name']
        //         }
        //     }
        // }
    ] 
    });

  if(!contact)  throw new Error (`Contact with ID ${id} not found`);
  return contact;
};

module.exports = {getContactById};