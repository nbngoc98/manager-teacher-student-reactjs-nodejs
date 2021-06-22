const db = require("../models");
const Teacher = db.teacher;
const Op = db.Sequelize.Op;

exports.getTeacher = (req, res) => {
  // const name = req.query.name;
  // var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

  Teacher.findAll()
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

// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: "name can not be empty!",
    });
    return;
  }
  const dataTeacher = {
    name: req.body.name,
    mail: req.body.mail,
    khoa: req.body.khoa,
    phone: req.body.phone,
    birthday: req.body.birthday,
  };

  Teacher.create(dataTeacher)
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

exports.delete = (req, res) => {
  const id = req.params.id;
  Teacher.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Teacher was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Tutorial with id=${id}. Maybe Teacher was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Teacher with id=" + id,
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  Teacher.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Teacher was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Teacher with id=${id}. Maybe Teacher was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Tutorial with id=" + id,
      });
    });
};

exports.search = (req, res) => {
  const name = req.query.name;
  const phone = req.query.phone;
  const birthday = req.query.birthday;

  if (name) {
    var options = {
      where: {
        name: name ? { [Op.like]: `%${name}%` } : null,
      },
    };
  }
  if (phone) {
    var options = {
      where: {
        phone: phone ? { [Op.like]: `%${phone}%` } : null,
      },
    };
  }
  if (birthday) {
    var options = {
      where: {
        birthday: birthday ? birthday : null,
      },
    };
  }

  // let options = {
  //   where: {
  //     name: name ? { [Op.like]: `%${name}%` } : null,
  //     phone: phone ? phone : null,
  //     // birthday: birthday ? birthday : null,
  //   },
  // };

  Teacher.findAll(options)
    .then((a) => {
      res.json(a);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Fail 500",
      });
    });
};
