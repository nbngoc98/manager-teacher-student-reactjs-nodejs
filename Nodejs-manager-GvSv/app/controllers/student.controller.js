const db = require("../models");
const Student = db.studentModel;
const Op = db.Sequelize.Op;

exports.getStudent = (req, res) => {
  Student.findAll()
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

exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: "name can not be empty!",
    });
    return;
  }
  const dataStudent = {
    name: req.body.name,
    birthday: req.body.birthday,
    khoa: req.body.khoa,
    lop: req.body.lop,
  };

  Student.create(dataStudent)
    .then((data) => {
      res.status(200).send({
        message: "OK",
      });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial.",
      });
    });
};
