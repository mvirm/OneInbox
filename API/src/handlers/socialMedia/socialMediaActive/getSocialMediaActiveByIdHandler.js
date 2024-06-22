const getSocialMediaActiveByIdHandler = (req, res) =>{
    res.send('ruta que trae una red social activa por id')
};
// const getSocialMediaActiveById = require('../../../controllers/socialMedia/SocialMediaActive/getSocialMediaActiveById');

// const getSocialMediaActiveByIdHandler = async (req, res) => {
//     const {id} = req.params;
//     try {
//         if(!id) throw new Error('Missing ID');
//         const socialMedia = await getSocialMediaActiveById(id);
//         !socialMedia ? res.status(400).send('Social Media not found') : res.status(200).json(socialMedia); 
//     } catch (error) {
//         res.status(500).json({error: error.message})
//     }
// }

module.exports = {getSocialMediaActiveByIdHandler};