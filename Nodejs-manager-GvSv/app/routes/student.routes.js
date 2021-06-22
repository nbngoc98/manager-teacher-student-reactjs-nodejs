module.exports = (app) => {
  const Student = require("../controllers/student.controller.js");

  var router = require("express").Router();

  router.get("/", Student.getStudent);
  router.post("/", Student.create);

  app.use("/api/student", router);
};
