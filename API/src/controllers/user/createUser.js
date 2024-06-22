const {User} = require('../../db');

    const createUser = async (name, email, password, phone, privilege, image, login, businessId, contactId, msgReceivedId, msgSentId ) => {

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
        // await newUser.addContact(contactId);
        // await newUser.addMsgReceived(msgReceivedId);
        // await newUser.setMsgSent(msgSentId);

        return newUser;
    }

module.exports = {
    createUser
}