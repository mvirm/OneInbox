const updateUser = require('../../controllers/user/updateUser');

const updateUserHandler = async (req, res) => {
    const{name, email, password, phone, privilege, socketId, image, login, businessId} = req.body;
    const{id} = req.params
    try {
        if(!id || !name || !email || !password || !phone || !privilege || !login || !businessId) throw new Error('Missing Data');
        await updateUser(id, name, email, password, phone, privilege, socketId, image, login, businessId);
        res.status(200).send('Congratulations! The user has been updated!')    
    } catch (error) {
        res.status(500).json({error: error.message})
    }
};

module.exports = updateUserHandler;