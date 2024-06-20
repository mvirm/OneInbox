// const { DataTypes } = require('sequelize');

// module.exports = (sequelize) =>{
//     sequelize.define('User',{
//         id: {
//             type: DataTypes.INTEGER,
//             autoIncrement: true,
//             allowNull: false,
//             primaryKey: true
//           },
//         name:{
//             type: DataTypes.STRING,
//             allowNull: false,
//             validate: {
//                 notEmpty: {
//                   msg: 'El nombre del usuario no puede estar vacío.'
//                 },
//                 len: {
//                   args: [3, 100],
//                   msg: 'El nombre del usuario debe tener entre 3 y 100 caracteres.'
//                 }
//               }
//         },
//         email:{
//             type: DataTypes.STRING,
//             allowNull: false,
//         },
//         password:{
//             type: DataTypes.STRING,
//             allowNull: false
//         },
//         phone:{
//             type: DataTypes.BIGINT,
//             allowNull:false
//         },
//         privilege:{
//             type: DataTypes.ENUM('Admin','Member'),
//             allowNull: false,
//         },
//         socketId:{
//             type:DataTypes.STRING
//         },
    
//         image:{
//             type: DataTypes.STRING,
//             allowNull: true 
//         },
//         login: {
//             type: DataTypes.BOOLEAN,
//             allowNull: false,
//             defaultValue: false

//         }
//     }, {timestamps: false});
// }