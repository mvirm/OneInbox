const getUserByIdHandler = (req, res) => {
    res.send('ruta que trae un usuario por ID')
};
// const getUserById = require('../../controllers/user/getUserById');

// const getUserByIdHandler = async (req, res) => {
//     const {id} = req.params;
//     try {
//         if(!id) throw new Error('Missing ID');
//         const user = await getUserById(id);
//         !user ? res.status(400).send('User not found') : res.status(200).json(user); 
//     } catch (error) {
//         res.status(500).json({error: error.message})
//     }
// }

module.exports = {getUserByIdHandler};