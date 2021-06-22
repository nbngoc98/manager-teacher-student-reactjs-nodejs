module.exports = (app) => {
  const Class = require("../controllers/class.controller.js");

  var router = require("express").Router();

  router.get("/", Class.getClass);

  app.use("/api/class", router);
};
