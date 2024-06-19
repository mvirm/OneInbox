const { SocialMediaActive } = require('../../../../db');
const numberIdValidation = require('../../utils/numberIdvalidation')

const deleteSocialMediaActive = async (id) => {
const socialMediaId = numberIdValidation(id)
    const socialMediaToDelete = await SocialMediaActive.findByPk(socialMediaId);

    if (!socialMediaToDelete) {
        throw new Error(`Social Media with Id ${id} not found`)

    } else {
        
        socialMediaToDelete.active = false,
        
        await socialMediaToDelete.save();
        return(`Social Media with ID ${id} has deleted`)
    }
};

module.exports = deleteSocialMediaActive;