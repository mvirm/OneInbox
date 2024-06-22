const {createContact} = require('../../controllers/contact/createContact')

const createContactHandler = async (req, res) => {
    const{name, email, phone, notification, businessId} = req.body;
    
    try {
        if(!businessId) throw new Error('Missing Business ID');
        if(!name && !email && !phone ) throw new Error('Missing Data');
        const newContact = await createContact(name, email, phone, notification, businessId);
        res.status(201).json(newContact)    
    } catch (error) {
        res.status(500).json({error: error.message})
    }
};

module.exports = {createContactHandler};