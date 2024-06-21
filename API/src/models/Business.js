const { DataTypes } = require('sequelize');

module.exports = (sequelize) =>{
    sequelize.define('Business',{
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                  msg: 'El nombre de la empresa no puede estar vacío.'
                },
                len: {
                  args: [2, 50],
                  msg: 'El nombre de la empresa debe tener entre 2 y 50 caracteres.'
                }
              }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              notEmpty: {
                msg: 'La contraseña es requerida.',
              },
              len: {
                args: [8, 10],
                msg: 'La contraseña debe tener entre 8 y 10 caracteres.',
              }
            }
        },
        address: {
            type: DataTypes.STRING,
            allowNull: true, 
        },
        city: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        country: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                  msg: 'El pais de la empresa no puede estar vacío.'
                },
              }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
              isEmail: {
                msg: 'El correo electrónico debe tener un formato válido.'
              }
            }
        },
        phone:{
            type: DataTypes.INTEGER,
            allowNull: true,
        },
    }, {timestamps: false});
}