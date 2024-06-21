const {Router} = require('express');
const {socialMediaActiveRoute} = require('./socialMediaActiveRoutes')
// const getAllSocialMediaHandler = require('../../handlers/socialMedia/allSocialMedia/getAllSocialMediaHandler');
// const addSocialMediaHandler = require('../../handlers/socialMedia/allSocialMedia/addSocialMediaHandler');

const socialMediaRoute = Router();

// socialMediaRoute.get('/', getAllSocialMediaHandler);
socialMediaRoute.get('/', (req, res) => {
    res.send('ruta que trae todas las redes sociales')
});
// socialMediaRoute.post('/', addSocialMediaHandler);
socialMediaRoute.post('/', (req, res) => {
    res.send('ruta para agregar una red social')
});
socialMediaRoute.use('/active', socialMediaActiveRoute);

module.exports = {socialMediaRoute};
