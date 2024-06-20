// const {User} = require('../../../db');
// // const numberIdValidation = require('../../utils/numberIdvalidation')
// const deleteUser = async(id) =>{
//     // const userId = numberIdValidation(id);
//     // const userToDelete = await User.findByPk(userId)
//     const userToDelete = await User.findByPk(id)
    
//     if(!userToDelete) {
//         throw new Error('User to delete is not found')
//     } else {
//         userToDelete.destroy();
//         return(`User with ID ${id} has been deleted`)
//     }   
// }

// module.exports = deleteUser