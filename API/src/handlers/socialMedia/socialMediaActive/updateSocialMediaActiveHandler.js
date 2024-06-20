// const updateSocialMediaActive = require('../../../controllers/socialMedia/SocialMediaActive/updateSocialMediaActive')

// const updateSocialMediaActiveHandler = async (req, res) => {
//     const{dataUser, active} = req.body;
//     const {id} = req.params
    
//     try {
//         if(!id) throw new Error('Missing id');
//         if(!dataUser) throw new Error('Missing Data');
//         await updateSocialMediaActive(id, dataUser, active);
//         res.status(201).send('Congratulations! Social Media has been updated!')    
//     } catch (error) {
//         res.status(500).json({error: error.message})
//     }
// };

// module.exports = updateSocialMediaActiveHandler;