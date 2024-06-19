const { SocialMediaActive } = require('../../../../db');
const numberIdValidation = require('../../utils/numberIdvalidation')

const updateSocialMedia = async (id, dataUser, active) => {
const socialMediaId = numberIdValidation(id)
    const socialMediaToUpdate = await SocialMediaActive.findByPk(socialMediaId);

    if (!socialMediaToUpdate) {
        throw new Error(`Social Media with Id ${id} not found`)

    } else {
        socialMediaToUpdate.dataUser = dataUser,
        socialMediaToUpdate.active = active,
        

        await socialMediaToUpdate.save();
    }
};

module.exports = updateSocialMedia;