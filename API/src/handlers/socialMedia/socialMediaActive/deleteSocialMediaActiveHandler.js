const {deleteSocialMediaActive} = require('../../../controllers/socialMedia/SocialMediaActive/deleteSocialMediaActive');

const deleteSocialMediaActiveHandler= async(req,res) =>{
    const{id} = req.params
    if(!id) throw new Error('Social Media not found')
    try {
        await deleteSocialMediaActive(id)
        return res.status(200).send('The Social Media has been deleted')
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
};

module.exports = {deleteSocialMediaActiveHandler};