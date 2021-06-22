const db = require("../models");
const Khoa = db.khoaModel;
const Op = db.Sequelize.Op;

exports.getKhoa = (req, res) => {
  Khoa.findAll()
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
