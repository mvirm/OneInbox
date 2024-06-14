const { Business } = require('../../../db');
const numberIdValidation = require('../../utils/numberIdvalidation')

const updateBusiness = async (id, name, email, password, phone, address, city, country) => {
const businessId = numberIdValidation(id)
    const businessToUpdate = await Business.findByPk(businessId);

    if (!businessToUpdate) {
        throw new Error(`Business with Id ${id} not found`)

    } else {
        updateBusiness.name = name,
        updateBusiness.email = email,
        updateBusiness.password = password,
        phone ? updateBusiness.phone = phone : null,
        address ? updateBusiness.address = address : null,
        city ? updateBusiness.city = city : null,
        updateBusiness.country = country,

        await businessToUpdate.save()
    }
}

module.exports = updateBusiness;