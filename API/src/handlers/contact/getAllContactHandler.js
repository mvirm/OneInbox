const getAllContact = require('../../controllers/contact/getAllContact')

const getAllContactHandler = async(req, res) => {
    try {
        const allContact = await getAllContact()
        !allContact ? res.status(400).send('Contacts not found') : res.status(200).json(allContact)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
};

module.exports = getAllContactHandler;