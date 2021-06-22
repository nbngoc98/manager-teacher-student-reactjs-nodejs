const db = require("../models");
const Class = db.classModel;
const Op = db.Sequelize.Op;

exports.getClass = (req, res) => {
  Class.findAll()
    .then((a) => {
      // res.send(a);
      res.json(a);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving teacher",
      });
    });
};
