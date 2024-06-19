const { Contact, User, Business, MsgRecieved,  MsgSent } = require('../../../db');
const numberIdValidation = require('../../utils/numberIdvalidation');

const getContactById = async (id) => {
    const contactId = await numberIdValidation(id)
    const contact = await Contact.findbyPk(contactId, { 
        include:[
        {
            model: Business,
            attributes: ['id', 'name']
        },
        {
            model: MsgRecieved,
            attributes: ['id', 'chatId', 'text', 'name', 'fromData', 'payload', 'timestamp', 'active', 'state', 'received','msgSentId'],
            include: {
                model: MsgSent,
                attribute: ['id', 'toData', 'message', 'timestamps', 'recieved', 'userId'],
                include: {
                    model: User,
                    attribute: ['id', 'name']
                }
            }
        }] 
    });

  if(!contact)  throw new Error (`Users not found`);
  return contact;
};

module.exports = getContactById;