const { Sequelize } = require("sequelize");

const db = new Sequelize(
  "mysql://lcyu8fohffzh5hbo:k1dtr1pny2whcbmv@r98du2bxwqkq3shg.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/bowp4il7jyftk184",
  {}
);

module.exports = db;
