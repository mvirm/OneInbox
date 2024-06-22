const {SocialMedia, SocialMediaActive, Business} = require('../../../db');
// const numberIdValidation = require('../../../utils/numberIdvalidation')

const getSocialMediaActiveById = async (id) => {
  //   const socialMediaId = numberIdValidation(id)
  // const socialMediaActive = await SocialMediaActive.findByPk(socialMediaId,
    const socialMediaA = await SocialMediaActive.findByPk(id,
    { 
  include: [
    {
        model: Business,
        attributes: ['id', 'name']
    },
    {
        model: SocialMedia,
        attributes: ['id', 'name', 'icon']
    }
  ] 
}
  );
  if(!socialMediaA)  throw new Error (`Social Media with ID ${id} not found`);
  return socialMediaA;
};

module.exports = {getSocialMediaActiveById};