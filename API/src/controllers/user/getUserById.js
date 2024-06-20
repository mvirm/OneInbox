const {Business, User, MsgSent, Contact} = require('../../../db')
// const numberIdValidation = require('../../utils/numberIdvalidation')

const getUserById = async (id) => {
    // const userId = await numberIdValidation(id)
    // const user = await User.findByPk(userId, {
        const user = await User.findByPk(id, {
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
    if(!user) throw new Error (`User with ID ${id} not found`);
    
    return user;
};  

module.exports = getUserById