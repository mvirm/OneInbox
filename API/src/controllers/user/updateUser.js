const { User } = require('../../db');
// const numberIdValidation = require('../../utils/numberIdvalidation')

const updateUser = async (id, name, email, password, phone, privilege, image, login) => {
// const userId = numberIdValidation(id)
//     const userToUpdate = await User.findByPk(userId);
if(!id) throw new Error('Missing ID')
    const userToUpdate = await User.findByPk(id);
    if (!userToUpdate) {
        throw new Error(`User with Id ${id} not found`)

    } else {
        userToUpdate.name = name,
        userToUpdate.email = email,
        userToUpdate.password = password,
        userToUpdate.phone = phone,
        userToUpdate.privilege = privilege,
        image ? userToUpdate.image = image : null,
        userToUpdate.login = login,

        await userToUpdate.save()
        return (`Congratulation! User with ID ${id} has been update`)
    }
}

module.exports = {updateUser};