const { User } = require('../../../db');
const numberIdValidation = require('../../utils/numberIdvalidation')

const updateUser = async (name, email, password, phone, privilege, image, login, businessId, contactId, msgRecievedId, msgSentId ) => {
const userId = numberIdValidation(id)
    const userToUpdate = await User.findByPk(userId);

    if (!userToUpdate) {
        throw new Error(`User with Id ${id} not found`)

    } else {
        updateUser.name = name,
        updateUser.email = email,
        updateUser.password = password,
        updateUser.phone,
        updateUser.privilege = privilege,
        image ? updateUser.image = image : null,
        updateUser.login = login,

        await userToUpdate.save()
    }
}

module.exports = updateUser;