const addSocialMediaActiveHandler =  (req, res) =>{
    res.send('ruta para activar una red social')
};
// const addSocialMediaActive = require('../../../controllers/socialMedia/SocialMediaActive/addSocialMediaActive')

// const addSocialMediaActiveHandler = async (req, res) => {
//     const{dataUser, active, businessId, socialMediaId} = req.body;
    
//     try {
//         if(!dataUser || !active || !businessId || !socialMediaId) throw new Error('Missing Data');
//         const newSocialMediaActive = await addSocialMediaActive(dataUser, active, businessId, socialMediaId);
//         res.status(201).json(newSocialMediaActive)    
//     } catch (error) {
//         res.status(500).json({error: error.message})
//     }
// };

module.exports = {addSocialMediaActiveHandler};