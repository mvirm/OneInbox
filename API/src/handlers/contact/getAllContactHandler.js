const {getAllContact} = require('../../controllers/contact/getAllContact');
const {searchContact} = require('../../controllers/contact/searchContact');

const getAllContactHandler = async(req, res) => {
    const {name, email, phone } = req.query
    try {
        const search = name || email || phone
        const allContact = await search ? searchContact(search) : getAllContact()
        !allContact.name || !allContact.email || !allContact.phone ? res.status(400).send('Contacts not found') : res.status(200).json(allContact)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
};

module.exports = {getAllContactHandler};