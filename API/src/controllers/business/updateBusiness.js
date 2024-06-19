const { Business } = require('../../../db');
const numberIdValidation = require('../../utils/numberIdvalidation')

const updateBusiness = async (id, name, email, password, phone, address, city, country) => {
const businessId = numberIdValidation(id)
    const businessToUpdate = await Business.findByPk(businessId);

    if (!businessToUpdate) {
        throw new Error(`Business with Id ${id} not found`)

    } else {
        businessToUpdate.name = name,
        businessToUpdate.email = email,
        businessToUpdate.password = password,
        phone ? businessToUpdate.phone = phone : null,
        address ? businessToUpdate.address = address : null,
        city ? businessToUpdate.city = city : null,
        businessToUpdate.country = country,

        await businessToUpdate.save()
    }
}

module.exports = updateBusiness;