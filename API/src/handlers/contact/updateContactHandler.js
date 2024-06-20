const updateContact = require('../../controllers/contact/updateContact')

const updateContactHandler = async (req, res) => {
    const{name, email, phone, notification} = req.body;
    const {id} = req.params
    
    try {
        if(!id) throw new Error('Missing ID');
        if(!name && !email && !phone ) throw new Error('Missing Data');
        await updateContact(id, name, email, phone, notification);
        res.status(201).send('Congratulations! The contact has been updated!')    
    } catch (error) {
        res.status(500).json({error: error.message})
    }
};

module.exports = updateContactHandler;