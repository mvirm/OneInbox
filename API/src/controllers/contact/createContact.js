const {Contact} = require('../../../db');

    const createContact = async (name, email, phone, notification, businessId, msgRecievedId) => {

        const [newContact, created] = await Contact.findOrCreate({
            where: {
                name, 
                email,
                phone,
                notification,
            }
        })
        
        await newContact.addBusiness(businessId);
        await newContact.addMsgRecieved(msgRecievedId);;

        return newContact;
    };

module.exports = createContact