// const express = require("express");
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const app = express();
// app.use(cors());
// // parse requests of content-type - application/json
// app.use(bodyParser.json());
// // parse requests of content-type - application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: true }));
// const db = require("./app/models");
// db.sequelize.sync();
// // simple route
// app.get("/", (req, res) => {
//   res.json({ message: "Welcome to gacoder.info" });
// });
// // set port, listen for requests
// const PORT = process.env.PORT || 8081;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}.`);
// });

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const router = require("express").Router();
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
//router.use('/api-docs', swaggerUi.serve);
//router.get('/api-docs', swaggerUi.setup(swaggerDocument));

// let morgan = require('morgan');

// if(process.env.NODE_ENV !== 'test') {
//   //use morgan to log at command line
//   app.use(morgan('combined')); //'combined' outputs the Apache style LOGs
// }
app.use(bodyParser.text());
// var corsOptions = {
//   origin: "http://localhost:8081"
// };

// app.use(cors(corsOptions));

app.use(cors());

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to application." });
});
const db = require("./models");
db.sequelize.sync();

require("./routes/teacher.routes")(app);
require("./routes/khoa.routes")(app);
require("./routes/class.routes")(app);
require("./routes/student.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
module.exports = app;
