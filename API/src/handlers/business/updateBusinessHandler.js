const updateBusinessHandler = (req, res) => {
    res.send('ruta para editar una empresa')
};
// const updateBusiness = require('../../controllers/business/updateBusiness')

// const updateBusinessHandler = async (req, res) => {
//     const{name, email, password, phone, address, city, country} = req.body;
//     const {id} = req.params
//     try {
//         if(!id || !name || !email || !password || !phone || !country) throw new Error('Missing Data');
//         await updateBusiness(id, name, email, password, phone, address, city, country);
//         res.status(200).send('Congratulations! The business has been updated!')    
//     } catch (error) {
//         res.status(500).json({error: error.message})
//     }
// };

module.exports = {updateBusinessHandler};