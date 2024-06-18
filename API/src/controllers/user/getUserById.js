const {Business, User, SocialMedia, SocialMediaActive} = require('../../../db')
const numberIdValidation = require('../../utils/numberIdvalidation')

const getUserById = async (id) => {
    const userId = await numberIdValidation(id)
    const user = await User.findByPk(userId, {
        include: [
            {
            model: Business,
            atributtes: ['id', 'name']
            },
            {
            model: MsgSent,
            attributes: ['id', 'message', 'contactId'],
            include: {
                model: Contact,
                attributes: ['id', 'name', 'email', 'phone']
                }
            }
        ]}
    );
    if(!user) throw new Error (`User with Id ${id} not found`);
    
    return user;
};  

module.exports = getUserById