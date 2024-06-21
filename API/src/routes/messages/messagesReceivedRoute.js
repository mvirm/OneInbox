const {Router} = require('express');
// const getAllMessagesReceivedHandler = require('../../handlers/message/messagesReceived/getAllMessagesReceivedHandler')
// const getAllMessagesReceivedByContactHandler = require('../../handlers/message/messagesReceived/getAllMessagesReceivedByContactHandler');
// const getMessageReceivedByIdHandler = require('../../handlers/message/messagesReceived/getMessageReceivedByIdHandler');
// const updateStateMessageReceivedHandler = require('../../handlers/message/messagesReceived/updateStateMessagesReceivedHandler');
// const updateFileMessageReceivedHandler = require('../../handlers/message/messagesReceived/updateFileMessageReceivedHandler')
// const updateActiveMessageReceivedHandler = require('../../handlers/message/messagesReceived/updateActiveMessagesReceivedHandler')

const messagesReceivedRoute = Router();

// messagesReceivedRoute.get('/', getAllMessagesReceivedHandler);
messagesReceivedRoute.get('/', (req, res) => {
    res.send('ruta que trae todos los mensajes recibidos')
});
// messagesReceivedRoute.get('contact/:id', getAllMessagesReceivedByContactHandler);
messagesReceivedRoute.get('/contact/:id', (req, res) => {
    res.send('ruta que trae todos los mensajes recibidos de un contacto')
});
// messagesReceivedRoute.get('/:id', getMessageReceivedByIdHandler);
messagesReceivedRoute.get('/:id', (req, res) => {
    res.send('ruta que trae un mensaje recibido por id')
});
// messagesReceivedRoute.put('/state/:id', updateStateMessageReceivedHandler);
messagesReceivedRoute.put('/state/:id', (req, res) =>{
    res.send('ruta que edita el estado de un mensaje recibido')
});
// messagesReceivedRoute.put('/file/:id', updateFileMessageReceivedHandler);
messagesReceivedRoute.put('/file/:id', (req, res) =>{
    res.send('ruta que archiva a un mensaje recibido')
});
// messagesReceivedRoute.put('/active/:id', updateActiveMessageReceivedHandler);
messagesReceivedRoute.put('/active/:id', (req, res) =>{
    res.send('ruta que activa-desactiva un mensaje recibido')
});
module.exports = {messagesReceivedRoute};