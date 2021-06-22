module.exports = app => {
    const Khoa = require("../controllers/khoa.controller.js");
  
    var router = require("express").Router();
  
    router.get("/", Khoa.getKhoa);
  
    app.use('/api/khoa', router);
  };
