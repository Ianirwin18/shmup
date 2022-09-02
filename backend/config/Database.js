import { Sequelize } from "sequelize";

const db = new Sequelize("auth_db", "root", "root", {
  host: "localhost",
  dialect: "mysql",
  port: 8889,
});

export default db;
