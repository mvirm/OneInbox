const { SocialMediaActive } = require('../../../../db');
// const numberIdValidation = require('../../utils/numberIdvalidation')

const updateSocialMedia = async (id, dataUser, active) => {
// const socialMediaId = numberIdValidation(id)
//     const socialMediaToUpdate = await SocialMediaActive.findByPk(socialMediaId);
    const socialMediaToUpdate = await SocialMediaActive.findByPk(id);
    if (!socialMediaToUpdate) {
        throw new Error(`Social Media with ID ${id} not found`)

    } else {
        socialMediaToUpdate.dataUser = dataUser,
        socialMediaToUpdate.active = active,
        
        await socialMediaToUpdate.save();
        return(`Congratulation! Social Media with ID ${id} has been update`)
    }
};

module.exports = updateSocialMedia;