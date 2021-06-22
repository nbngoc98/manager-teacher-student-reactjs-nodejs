module.exports = (sequelize, Sequelize) => {
    const classModel = sequelize.define("classes", {
      name: {
        type: Sequelize.STRING
      },
    });
  
    return classModel;
  };