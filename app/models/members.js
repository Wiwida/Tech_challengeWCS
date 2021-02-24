const sequelize = require('../database');
const {DataTypes, Model} = require('sequelize');

class Members extends Model {}

Members.init({
    name: DataTypes.STRING,
    quality: DataTypes.STRING,
    hobbie: DataTypes.STRING
}, {
    sequelize,
    tableName: 'members'
});

module.exports = Members;