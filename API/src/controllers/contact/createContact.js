const {Contact} = require('../../db');

    const createContact = async (name, email, phone, notification, businessId, msgReceivedId, msgSentId, socialMediaId) => {

        const [newContact, created] = await Contact.findOrCreate({
            where: {
                name, 
                email,
                phone,
                notification,
            }
        })
        
        await newContact.addBusiness(businessId);
        await newContact.addMsgReceived(msgReceivedId);
        await newContact.addMsgSent(msgSentId);
        await newContact.setSocialMedia(socialMediaId);

        return newContact;
    };

module.exports = {createContact};