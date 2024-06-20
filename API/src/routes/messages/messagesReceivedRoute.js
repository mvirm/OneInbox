const {Router} = require('express');
const getAllMessagesReceivedHandler = require('../../handlers/message/messagesReceived/getAllMessagesReceivedHandler')
const getAllMessagesReceivedByContactHandler = require('../../handlers/message/messagesReceived/getAllMessagesReceivedByContactHandler');
const getMessageReceivedByIdHandler = require('../../handlers/message/messagesReceived/getMessageReceivedByIdHandler');
const updateStateMessageReceivedHandler = require('../../handlers/message/messagesReceived/updateStateMessagesReceivedHandler');
const updateFileMessageReceivedHandler = require('../../handlers/message/messagesReceived/updateFileMessagesReceivedHandler')
const updateActiveMessageReceivedHandler = require('../../handlers/message/messagesReceived/updateActiveMessagesReceivedHandler')

const messagesReceivedRoute = Router();

messagesReceivedRoute.get('/', getAllMessagesReceivedHandler);
messagesReceivedRoute.get('contact/:id', getAllMessagesReceivedByContactHandler);
messagesReceivedRoute.get('/:id', getMessageReceivedByIdHandler);
messagesReceivedRoute.put('/state/:id', updateStateMessageReceivedHandler);
messagesReceivedRoute.put('/file/:id', updateFileMessageReceivedHandler);
messagesReceivedRoute.put('/active/:id', updateActiveMessageReceivedHandler);

module.exports = messagesReceivedRoute