const { Sequelize } = require ("sequelize");
require("dotenv").config();

// cria a conexão entre o banco de dados MASCOTS e o sistema
const sequelize = new Sequelize(process.env.DB_EXTERNAL, {
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  });

//exporta a conexão
module.exports = {sequelize};