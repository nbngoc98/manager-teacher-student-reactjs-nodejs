module.exports = (sequelize, Sequelize) => {
    const studentModel = sequelize.define("students", {
      name: {
        type: Sequelize.STRING
      },
      birthday: {
        type: Sequelize.STRING
      },
      khoa: {
        type: Sequelize.INTEGER
      },
      lop: {
        type: Sequelize.INTEGER
      },
    });
  
    return studentModel;
  };