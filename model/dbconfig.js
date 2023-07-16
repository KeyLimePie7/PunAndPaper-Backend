const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("notes-db", "username", "password", {
  dialect: "sqlite",
  host: "./dev.sqlite"
});

module.exports = sequelize;
