// this is the  model
const { Model, DataTypes } = require("sequelize");
const sequelize = require("./dbconfig");

class Note extends Model {}

Note.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING
    },
    content: {
      type: DataTypes.STRING
    }
  },
  {
    sequelize,
    modelName: "note",
    timestamps: false
  }
);

module.exports = Note;
