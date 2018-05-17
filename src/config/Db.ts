import { Sequelize } from "sequelize-typescript";

// import * as cls from 'continuation-local-storage';
//
// const namespace = cls.createNamespace('transaction');
// Sequelize.useCLS(namespace);

export const db = new Sequelize({
  dialect: "mysql",
  host: "localhost",
  port: 3306,
  database: "node_test",
  username: "root",
  password: "Passw0rd",
  operatorsAliases: false,
  modelPaths: [__dirname.substr(0, __dirname.lastIndexOf("/")) + "/models/"],

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },

  logging: true // open show log
});
