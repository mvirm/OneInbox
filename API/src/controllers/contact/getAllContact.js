const { Contact, User, Business, MsgReceived, MsgSent, SocialMedia } = require('../../db');

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
    {model: SocialMedia,
      attributes: ['id', 'name', 'icon']
    },
    {
        model: MsgReceived,
        attributes: ['id', 'chatId', 'text', 'name', 'fromData', 'payload', 'timestamp', 'active', 'state', 'received'],
      },
      {
        model: MsgSent,
            attribute: ['id', 'toData', 'message', 'timestamp', 'received', 'userId'],
            include: {
                model: User,
                attribute: ['id', 'name', 'privilege']
            }
    }
]});
  if(!contacts)  throw new Error ('Contacts not found');
  return contacts;
};

module.exports = {getAllContact};