const { DataTypes } = require('sequelize');

module.exports = (sequelize) =>{
    sequelize.define('Contact',{
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
          },
        name:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: true,
            unique: true,
          },
        phone:{
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        notification:{
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
    }, {timestamps: false});
}