const {User} = require('../../db');

    const createUser = async (name, email, password, phone, privilege, image, login, businessId, msgSentId ) => {

        const [newUser, created] = await User.findOrCreate({
            where: {
                name, 
                email,
                password,
                phone,
                privilege,
                image,  
                login,
            }
        })
        
        await newUser.setBusiness(businessId);
        await newUser.setMsgSent(msgSentId);

        return newUser;
    }

module.exports = {
    createUser
}