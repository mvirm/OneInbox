// const getAllUsers = require('../../controllers/user/getAllUsers')

// const getAllUsersHandler = async(req, res) => {
//     try {
//         const allUsers = await getAllUsers()
//         !allUsers ? res.status(400).send('Users not found') : res.status(200).json(allUsers)
//     } catch (error) {
//         res.status(500).json({error: error.message})
//     }
// };

// module.exports = getAllUsersHandler;