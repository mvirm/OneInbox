const {Router} = require('express');
// const getBusinessByIdHandler = require('../handlers/business/getBusinessByIdHandler');
// const updateBusinessHandler = require('../handlers/business/updateBusinessHandler');

const businessRoute = Router();
// // businessRoute.get('/', getAllBusinessHandler);
businessRoute.get('/', (req, res) => {
    res.send('ruta que trae todas las empresas')
});
// businessRoute.get('/:id', getBusinessByIdHandler);
businessRoute.get('/:id', (req, res) => {
    res.send('ruta que trae una empresa por id')
});
// // businessRoute.post('/', createBusinessHandler)
businessRoute.post('/', (req, res) => {
    res.send('ruta que crea una empresa')
})
// businessRoute.put('/:id', updateBusinessHandler);
businessRoute.put('/:id', (req, res) => {
    res.send('ruta para editar una empresa')
});
// // businessRoute.delete('/delete/:id', deleteBusinessHandler);
businessRoute.delete('/delete/:id', (req, res) => {
    res.send('ruta para eiminar una empresa')
});

module.exports= {businessRoute};