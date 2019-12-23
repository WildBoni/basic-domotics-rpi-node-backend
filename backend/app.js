const path = require('path');
const express = require('express');

const routes = require("./routes/routes");

const app = express();

app.use(express.json({limit: '10mb', extended: true}))
app.use(express.urlencoded({limit: '10mb', extended: true}))

app.use((req, res, next) => {
  res.setHeader(
    "Access-Control-Allow-Origin",
    "*"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, DELETE, OPTIONS"
  );
  next();
});

app.use("/data", routes);

app.use(express.static(path.join(__dirname, '../src')));

app.get('*', function (request, response) {
  response.sendFile(path.join(__dirname, '../src/index.html'));
});

module.exports = app;
