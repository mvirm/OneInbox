const { Contact, User, Business, MsgReceived,  MsgSent } = require('../../../db');

const getAllContact = async () => {
  const contacts = await Contact.findAll(
    { order: [
      ['name'],
  ],
include:[
    {
        model: Business,
        attributes: ['id', 'name']
    },
    {
        model: MsgReceived,
        attributes: ['id', 'chatId', 'text', 'name', 'fromData', 'payload', 'timestamp', 'active', 'state', 'received','msgSentId'],
        include: {
            model: MsgSent,
            attribute: ['id', 'toData', 'message', 'timestamps', 'received', 'userId'],
            include: {
                model: User,
                attribute: ['id', 'name']
            }
        }
    }
]});
  if(!contacts)  throw new Error ('Contacts not found');
  return contacts;
};

module.exports = getAllContact;