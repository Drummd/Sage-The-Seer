const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Prophecy extends Model {}

Prophecy.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true
    },
    prophecy_str: {
        type: DataTypes.STRING,
        validate: {
            len: [5]
        }
    },
    emotions: {
        type: DataTypes.STRING,
        allowNull: false,

    },

}, {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'prophecy'
});

module.exports = Prophecy;

//emotions data
//tags for 
//angry 
//sad afraid 
//happy excited

//many to many for users
// through table