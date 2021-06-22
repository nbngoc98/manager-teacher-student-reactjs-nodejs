const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.khoaModel = require("./khoa.model.js")(sequelize, Sequelize);
db.classModel = require("./class.model.js")(sequelize, Sequelize);
db.studentModel = require("./student.model.js")(sequelize, Sequelize);
db.teacher = require("./teacher.model.js")(sequelize, Sequelize);

// db.employees.belongsToMany(db.companys, {
//   through: "employee_company",
//   as: "companys",
//   foreignKey: "employee_id",
// });
// db.companys.belongsToMany(db.employees, {
//   through: "employee_company",
//   as: "employees",
//   foreignKey: "company_id",
// });
module.exports = db;
