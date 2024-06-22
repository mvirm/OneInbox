const { Contact, User, Business, MsgReceived,  MsgSent } = require('../../../db');
// const numberIdvalidation = require('../../../utils/numberIdvalidation');

const getAllMessagesSentByUser = async (userId) => {
// const userId = numberIdvalidation(id)
  const messages = await MsgSent.findAll(
    { 
        where: {userId},  
        order: [
      ['timestamp'],
  ],
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
    
]});
  if(!messages)  throw new Error ('Messages Sent not found');
  return messages;
};

module.exports = {getAllMessagesSentByUser};