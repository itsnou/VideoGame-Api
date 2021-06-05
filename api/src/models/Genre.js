const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Genre',{
        id:{
            type: DataTypes.INTEGER,
            unique:true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
        },
    })
}