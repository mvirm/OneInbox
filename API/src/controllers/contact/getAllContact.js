const { Contact, User, Business, MsgRecieved,  MsgSent } = require('../../../db');

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
    }
] 
}
);
  if(!contacts)  throw new Error (`Users not found`);
  return contacts;
};

module.exports = getAllContact;