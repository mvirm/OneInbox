const getBusinessByIdHandler =(req, res) => {
    res.send('ruta que trae una empresa por id')
};
// const getBusinessById = require('../../controllers/business/getBusinessById')

// const getBusinessByIdHandler = async (req, res) => {
//     const {id} = req.params;
//     try {
//         if(!id) throw new Error('Missing ID');
//         const business = await getBusinessById(id);
//         !business ? res.status(400).send('Business not found') : res.status(200).json(business); 
//     } catch (error) {
//         res.status(500).json({error: error.message})
//     }
// }

module.exports = {getBusinessByIdHandler};