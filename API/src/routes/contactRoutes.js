const {Router} = require('express');
// const getAllContactHandler = require('../handlers/contact/getAllContactHandler');
// const getContactByIdHandler = require('../handlers/contact/getContactByIdHandler');
// const createContactHandler = require('../handlers/contact/createContactHandler');
// const updateContactHandler = require('../handlers/contact/updateContactHandler');

const contactRoute = Router();

// contactRoute.get('/', getAllContactHandler);
contactRoute.get('/', (req, res) =>{
    res.send('esta ruta trae todos los contactos')
});
// contactRoute.get('/:id', getContactByIdHandler);
contactRoute.get('/:id', (req, res) => {
    res.send('esta ruta trae un contacto por id')
});
// contactRoute.post('/', createContactHandler);
contactRoute.post('/', (req, res) => {
    res.send('esta ruta crea un contacto')
});
// contactRoute.put('/:id', updateContactHandler)
contactRoute.put('/:id', (req, res) =>{
    res.send('esta ruta edita un contacto')
})

module.exports = {contactRoute};