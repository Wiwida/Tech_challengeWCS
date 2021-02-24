require('dotenv').config();

const {Sequelize} = require('sequelize');

// Instanciation de sequelize pour pouvoir l'utiliser :

const sequelize = new Sequelize(process.env.PG_URL, {
    define: {
        timestamps: false,
        underscored: true
    }
});

module.exports = sequelize;