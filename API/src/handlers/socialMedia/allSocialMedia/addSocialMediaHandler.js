const {addSocialMedia} = require('../../../controllers/socialMedia/allSocialMedia/addSocialMedia')

const addSocialMediaHandler = async (req, res) => {
    const{name, icon} = req.body;
    
    try {
        if(!name || !icon ) throw new Error('Missing Data');
        const newSocialMedia = await addSocialMedia(name, icon);
        res.status(201).json(newSocialMedia)    
    } catch (error) {
        res.status(500).json({error: error.message})
    }
};

module.exports = {addSocialMediaHandler};