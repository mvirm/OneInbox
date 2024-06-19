const {Contact} = require('../../../db');

    const createContact = async (name, email, phone, notification, businessId, msgReceivedId) => {

        const [newContact, created] = await Contact.findOrCreate({
            where: {
                name, 
                email,
                phone,
                notification,
            }
        })
        
        await newContact.addBusiness(businessId);
        await newContact.addMsgReceived(msgReceivedId);;

        return newContact;
    };

module.exports = createContact