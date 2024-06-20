// const { DataTypes } = require("sequelize");
// //REVEER EL MODELO SEGUN DATA QUE LLEGA DE LA INTEGRACION DE LAS REDES SOCIALES ***POR AHI SE PUEDE LIMPIAR UN POCO***
// module.exports = (sequelize) => {
//   const MsgReceived = sequelize.define(
//     "MsgReceived",
//     {
//       id: {
//         type: DataTypes.UUID,
//         allowNull: false,
//         primaryKey: true,
//         defaultValue: DataTypes.UUIDV4,
//       },
//       chatId: {
//         type: DataTypes.BIGINT,
//         allowNull: false,
//       },
//       text: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       },
//       name: {
//         type: DataTypes.TEXT,
//         allowNull: false,
//       },
//       fromData: {
//         type: DataTypes.JSON,
//         allowNull: false,
//         defaultValue: {}, // Default value for the object if not specified
//         validate: {
//           isObject(value) {
//             if (typeof value !== "object") {
//               throw new Error("yourObjectName must be an object");
//             }
//           },  
//         },
//       },
//       payload: {
//         type: DataTypes.JSON,
//         allowNull: false,
//       },
//       timestamp: {
//         type: DataTypes.BIGINT,
//         allowNull: false,
//       },
//       active: {
//         type: DataTypes.BOOLEAN,
//         allowNull: false,
//         defaultValue: false
//       },
//       state: {
//         type: DataTypes.ENUM,
//         //hay que cambiar el front para usar los values en Ingles
//         values: ['No Leidos', 'Leidos', 'Respondidos', 'Archivados'],
//         defaultValue: "No Leidos",
//         // values: ['New', 'Read', 'Answered', 'Archived'],
//         // defaultValue: "New",
//         allowNull: false,
//       },
//       received: {
//         type: DataTypes.BOOLEAN,
//         allowNull: false,
//         defaultValue: true
//       }
//     },
//     { timestamps: false }
//   );
//   return MsgReceived;

// };