const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Videogame', {

    //Tengo que ver si esto funciona (?)
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    
    description:{
      type: DataTypes.TEXT,
      allowNull:false
    },

    released:{
      type: DataTypes.STRING,
    },

    rating:{
      type: DataTypes.STRING,
    },

    platforms:{
      type: DataTypes.JSON,
      allowNull:false
    }
  },
  );
};
