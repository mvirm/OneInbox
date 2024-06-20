const { Contact } = require('../../../db');
const numberIdValidation = require('../../utils/numberIdvalidation')

const updateContact = async (id, name, email, phone, notification) => {
const contactId = numberIdValidation(id)
    const contactToUpdate = await Contact.findByPk(contactId);

    if (!contactToUpdate) {
        throw new Error(`Contact with Id ${id} not found`)

    } else {
        contactToUpdate.name = name,
        contactToUpdate.email = email,
        contactToUpdate.phone = phone,
        contactToUpdate.notification = notification,

        await contactToUpdate.save()
        return(`Congratuation! The Contact with ID ${id} has been update`)
    }
}

module.exports = updateContact;