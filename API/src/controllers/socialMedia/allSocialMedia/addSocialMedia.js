const {SocialMedia} = require('../../../db');

    const addSocialMedia = async (name, icon ) => {

        const [newSocialMedia, created] = await SocialMedia.findOrCreate({
            where: {
                name, 
                icon,
            }
        })

        return newSocialMedia;
    }



module.exports = {
    addSocialMedia
}