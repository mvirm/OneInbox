const {Router} = requiere('express');
const messagesReceivedRoute = require('./messagesReceivedRoute');
const messagesSentRoute = require('./messagesSentRoute');
const getAllMessagesHandler = require('../../handlers/message/allMessages/getAllMessagesHandler');
const getAllMessagesByContactHandler = require('../../handlers/message/allMessages/getAllMessagesByContactHandler');

const allMessagesRoute = Router();

allMessagesRoute.get('/', getAllMessagesHandler);
allMessagesRoute.get('/:contactId', getAllMessagesByContactHandler)
allMessagesRoute.use('/received', messagesReceivedRoute)
allMessagesRoute.use('/sent', messagesSentRoute)

module.exports = allMessagesRoute;