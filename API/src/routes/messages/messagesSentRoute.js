const {Router} = require('express');
// const getAllMessagesSentHandler = require('../../handlers/message/messagesSent/getAllMessagesSentHandler');
// const getAllMessagesSentByContactHandler = require('../../handlers/message/messagesSent/getAllMessagesSentByContactHandler');
// const getAllMessagesSentByUserHandler = require('../../handlers/message/messagesSent/getAllMessagesSentByUserHandler');
// const getMessageSentByIdHandler = require('../../handlers/message/messagesSent/getMessageSentByIdHandler');
// const createMessageSentHandler = require('../../handlers/message/messagesSent/createMessageSentHandler');
// const updateMessagesSentHanlder = require('../../handlers/message/messagesSent/updateMessageSentHanlder');
// const deleteMessagesSentHandler = require('../../handlers/message/messagesSent/deleteMessageSentHandler');

const messagesSentRoute = Router();

// messagesSentRoute.get('/', getAllMessagesSentHandler);
messagesSentRoute.get('/', (req, res) => {
    res.send('ruta que trae todos los mensajes enviados')
});
// messagesSentRoute.get('/contact/:id', getAllMessagesSentByContactHandler);
messagesSentRoute.get('/contact/:id', (req, res) => {
    res.send('ruta que trae todos los mensajes enviados asociados a un contacto')
});
// messagesSentRoute.get('/user/:id', getAllMessagesSentByUserHandler);
messagesSentRoute.get('/user/:id', (req, res) => {
    res.send('ruta que trae todos los mensajes enviados por un mismo usuario')
});
// messagesSentRoute.get('/:id', getMessageSentByIdHandler)
messagesSentRoute.get('/:id', (req, res) => {
    res.send('ruta que trae un mensaje enviado por id')
});
// messagesSentRoute.post('/', createMessageSentHandler);
messagesSentRoute.post('/', (req, res) => {
    res.send('ruta para crear un mensaje enviado')
});
// messagesSentRoute.put('/:id', updateMessagesSentHanlder);
messagesSentRoute.put('/:id', (req, res) =>{
    res.send('ruta que edita un mensaje enviado')
});
// messagesSentRoute.delete('/delete/:id', deleteMessagesSentHandler)
messagesSentRoute.delete('/delete/:id', (req, res) =>{
    res.send('ruta que elimina un mensaje enviado')
});

module.exports = {messagesSentRoute};