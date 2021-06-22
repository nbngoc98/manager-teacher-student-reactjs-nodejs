module.exports = (sequelize, Sequelize) => {
    const khoaModel = sequelize.define("khoas", {
      name: {
        type: Sequelize.STRING
      },
    });
  
    return khoaModel;
  };