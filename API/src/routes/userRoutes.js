const {Router} = require('express');
const getAllUserHandler = require('../handlers/user/getAllUsersHandler');
const getUserByIdHandler = require('../handlers/user/getUserByIdHandler');
const createUserHandler = require('../handlers/user/createUserHandler');
const updateUserHandler = require('../handlers/user/updateUserHandler');
const deleteUserHandler = require('../handlers/user/deleteUserHandler');

const userRoute = Router();

userRoute.get('/', getAllUserHandler);
userRoute.get('/:id', getUserByIdHandler);
userRoute.post('/', createUserHandler);
userRoute.put('/:id', updateUserHandler);
userRoute.delete('/delete/:id', deleteUserHandler);

module.exports = userRoute;