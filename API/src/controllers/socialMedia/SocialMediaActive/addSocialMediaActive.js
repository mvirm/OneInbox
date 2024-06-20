// const { SocialMediaActive } = require('../../../../db');

//     const addSocialMediaActive = async (dataUser, active, socialMediaId, businessId ) => {

//         const [newSocialMediaActive, created] = await SocialMediaActive.findOrCreate({
//             where: {
//                 dataUser, 
//                 active
//             }
//         })

//         await newSocialMediaActive.addBusiness(businessId);
//         await newSocialMediaActive.addSocialMedia(socialMediaId);

//         return newSocialMediaActive;
//     }

// module.exports = {
//     addSocialMediaActive
// }