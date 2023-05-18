const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('postgres://postgres:1234@localhost:5432/teste-junior')

const Company = sequelize.define("companies", {
  company_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  company_name: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  company_street: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  company_street_number: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  company_neighborhood: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  company_city: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  company_state: {
    type: DataTypes.TEXT,
    allowNull: false
  }
});

(async () => {
  // { force: true }
  await sequelize.sync();
})();

module.exports = Company;