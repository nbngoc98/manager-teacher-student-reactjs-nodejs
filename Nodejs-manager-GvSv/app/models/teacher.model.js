module.exports = (sequelize, Sequelize) => {
    const teacher = sequelize.define("teachers", {
      name: {
        type: Sequelize.STRING
      },
      mail: {
        type: Sequelize.STRING
      },
      khoa: {
        type: Sequelize.INTEGER                     
      },
      phone: {
        type: Sequelize.STRING
      },
      birthday: {
        type: Sequelize.STRING
      }
    });
  
    return teacher;
  };