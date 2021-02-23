const express = require("express");
const mongoose = require("mongoose");
const router = require("./router/router");
const bodyParser = require("body-parser");
const cors = require('cors');
const config = require('./config/config')

const app = express();
mongoose.connect(
  config.mongoUrl,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Mongo connected");
  }
);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

app.use("/", router);
app.use(express.static("uploads"));

app.listen(config.port, () => {
  console.log(`Listening to port ${config.port}`);
});
