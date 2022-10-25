const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class UserProphecy extends Model {}

UserProphecy.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'user',
            key: 'id'
        }
    },
    prophecy_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'prophecy',
            key: 'id'
        }
    }

}, {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'userprophecy'
});

module.exports = UserProphecy;