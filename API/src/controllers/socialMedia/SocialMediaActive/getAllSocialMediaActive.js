const {SocialMedia, SocialMediaActive, Business} = require('../../../../db');

const getAllSocialMediaActive = async () => {
  const allSocialMediaActive = await SocialMediaActive.findAll(
    { order: [
      ['name'],
  ],
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
  if(!allSocialMediaActive)  throw new Error (`Social Media not found`);
  return allSocialMediaActive;
};

module.exports = getAllSocialMediaActive;