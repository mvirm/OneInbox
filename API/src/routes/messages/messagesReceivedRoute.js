const {Router} = requiere('express');
const getAllMessagesReceivedHandler = require('../../handlers/message/messagesReceived/getAllMessagesReceivedHandler')
const getAllMessagesReceivedByContactHandler = require('../../handlers/message/messagesReceived/getAllMessagesRecivedByContactHandler');
const getMessageReceivedByIdHandler = require('../../handlers/message/messagesReceived/getMessageReceivedByIdHandler');
const updateMessageReceivedHandler = require('../../handlers/message/messagesReceived/updateMessagesReceivedHandler');

const messagesReceivedRoute = Router();

messagesReceivedRoute.get('/', getAllMessagesReceivedHandler);
messagesReceivedRoute.get('/:contactId', getAllMessagesReceivedByContactHandler);
messagesReceivedRoute.get('/:id', getMessageReceivedByIdHandler);
messagesReceivedRoute.put('/:id', updateMessageReceivedHandler);

module.exports = messagesReceivedRoute