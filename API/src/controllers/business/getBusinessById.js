const {Business, User, SocialMedia, SocialMediaActive} = require('../../db')
// const numberIdValidation = require('../../utils/numberIdvalidation')

const getBusinessById = async (id) => {
    // const businessId = await numberIdValidation(id)
    // const business = await Business.findByPk(businessId, {
    if(!id) throw new Error('Missing ID');
    const business = await Business.findByPk(id, {
        include: [
            {
            model: User,
            atributtes: ['id', 'name']
            },
            {
            model: SocialMediaActive,
            attribute: ['id', 'dataUser', 'socialMediaId'],
                include: {
                    model: SocialMedia,
                    attributes: ['id', 'name', 'icon']
                }
            }
        ]}
    );
    if(!business) throw new Error (`Business with Id ${id} not found`);
    
    return business;
};  

module.exports = {getBusinessById};
