const {Business} = require('../../../db')
const numberIdValidation = require('../../utils/numberIdvalidation')

const getBusinessById = async (id) => {
    const businessId = await numberIdValidation(id)
    const business = await Business.findByPk(businessId);
    if(!business) throw new Error (`Business with Id ${id} not found`);
    return business;
};  

module.exports = getBusinessById
