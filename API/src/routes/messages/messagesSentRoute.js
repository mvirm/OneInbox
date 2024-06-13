const {Router} = requiere('express');
const getAllMessagesSentHandler = require('../../handlers/message/messagesSent/getAllMessagesSentHandler');
const getAllMessagesSentByContactHandler = require('../../handlers/message/messagesSent/getAllMessagesSentByContactHandler');
const getMessageSentByIdHandler = require('../../handlers/message/messagesSent/getMessageSentByIdHandler');
const createMessageSentHandler = require('../../handlers/message/messagesSent/createMessageSentHandler');
const updateMessagesSentHanlder = require('../../handlers/message/messagesSent/updateMessageSentHanlder');
const deleteMessagesSentHandler = require('../../handlers/message/messagesSent/deleteMessageSentHandler');

const messagesSentRoute = Router();

messagesSentRoute.get('/', getAllMessagesSentHandler);
messagesSentRoute.get('/:contactId', getAllMessagesSentByContactHandler);
messagesSentRoute.get('/:id', getMessageSentByIdHandler)
messagesSentRoute.post('/', createMessageSentHandler);
messagesSentRoute.put('/:id', updateMessagesSentHanlder);
messagesSentRoute.delete('/delete/:id', deleteMessagesSentHandler)

module.exports = messagesSentRoute;