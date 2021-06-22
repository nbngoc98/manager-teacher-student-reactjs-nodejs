module.exports = app => {
    const teacher = require("../controllers/teacher.controller.js");
  
    var router = require("express").Router();
  
    router.get("/", teacher.getTeacher);

    router.post("/", teacher.create);

    router.delete("/:id", teacher.delete);

    router.put("/:id", teacher.update);

    router.get("/search", teacher.search);

  
    app.use('/api/teacher', router);
  };
