const {Business} = require('../../db');

    const createBusiness = async (name, password, address, city, country, email, phone, userId, contactId, socialMediaActiveId) => {

        const [newBusiness, created] = await Business.findOrCreate({
            where: {
                name,
                password,
                address,
                city, 
                country, 
                email,
                phone,
            }
        })
        
        await newBusiness.setUser(userId);
        await newBusiness.addContact(contactId);
        await newBusiness.addSocialMediaActive(socialMediaActiveId)

        return newBusiness;
    };

module.exports = {createBusiness};