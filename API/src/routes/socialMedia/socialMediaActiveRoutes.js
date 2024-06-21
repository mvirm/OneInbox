const {Router} = require('express');
// const getAllSocialMediaActiveHandler = require('../../handlers/socialMedia/socialMediaActive/getAllSocialMediaActiveHandler');
// const getSocialMediaActiveByIdHandler = require('../../handlers/socialMedia/socialMediaActive/getSocialMediaActiveByIdHandler');
// const addSocialMediaActiveHandler = require('../../handlers/socialMedia/socialMediaActive/addSocialMediaActiveHandler');
// const updateSocialMediaActiveHandler = require('../../handlers/socialMedia/socialMediaActive/updateSocialMediaActiveHandler');
// const deleteSocialMediaActiveHandler = require('../../handlers/socialMedia/socialMediaActive/deleteSocialMediaActiveHandler');

const socialMediaActiveRoute = Router();

// socialMediaActiveRoute.get('/', getAllSocialMediaActiveHandler);
socialMediaActiveRoute.get('/', (req, res) =>{
    res.send('ruta que trae todas las redes sociales activas')
});
// socialMediaActiveRoute.get('/:id', getSocialMediaActiveByIdHandler);
socialMediaActiveRoute.get('/:id', (req, res) =>{
    res.send('ruta que trae una red social activa por id')
});
// socialMediaActiveRoute.post('/', addSocialMediaActiveHandler);
socialMediaActiveRoute.post('/', (req, res) =>{
    res.send('ruta para activar una red social')
});
// socialMediaActiveRoute.put('/:id', updateSocialMediaActiveHandler);
socialMediaActiveRoute.put('/:id', (req, res) =>{
    res.send('ruta para editar una red social activa')
});
// socialMediaActiveRoute.delete('/delete/:id', deleteSocialMediaActiveHandler);
socialMediaActiveRoute.delete('/delete/:id', (req, res) =>{
    res.send('ruta para eliminar una red social activa')
});

module.exports = {socialMediaActiveRoute};
