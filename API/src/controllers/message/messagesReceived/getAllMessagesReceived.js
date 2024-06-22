const { Contact, User, Business, MsgReceived,  MsgSent } = require('../../../db');

const getAllMessagesReceived = async () => {
  const messages = await MsgReceived.findAll(
    { order: [
      ['timestamp'],
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
  if(!messages)  throw new Error ('Messages Received not found');
  return messages;
};

module.exports = {getAllMessagesReceived};