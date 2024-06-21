const { DataTypes } = require('sequelize');
//REVEER EL MODELO SEGUN DATA QUE SE NECESITA PARA LA INTEGRACION DE LAS REDES SOCIALES ***POR AHI SE PUEDE LIMPIAR UN POCO***
module.exports = (sequelize) => {
  sequelize.define('MsgSent', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    toData: {
      type: DataTypes.JSON,
      allowNull: false,
      defaultValue: {},
      validate: {
        isObject(value) {
          if (typeof value !== 'object') {
            throw new Error('toData must be an object');
          }
        },
        hasAppAndValue(value) {
          if (!value.app || !value.value) {
            throw new Error('toData must have both app and value properties');
          }
        },
      },
    },
    message: {
      type: DataTypes.STRING,
      allowNull: false
    },
    timestamps: {
      type: DataTypes.DATE,
      allowNull: true
    },
    received: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  }, { timestamps: false });
};