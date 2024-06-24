const { Contact, User, Business, MsgReceived, MsgSent } = require('../../../db');

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
        include: [
          {model: MsgReceived,
          attributes: ['id', 'chatId', 'text', 'name', 'fromData', 'payload', 'timestamp', 'active', 'state', 'received']
          },
          {
            model: MsgSent,
                attribute: ['id', 'toData', 'message', 'timestamp', 'received', 'userId'],
                include: {
                    model: User,
                    attribute: ['id', 'name', 'privilege']
                }
        }
        ]
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