const express = require("express");
const indexRouter = express.Router();
const indexController = require("../controllers/indexController");

const formatDate = require("../utils/formatDate");

const messages = [
  {
    text: "Hello, Viltrum!",
    user: "Thragg",
    added: formatDate(new Date()),
    id: 1,
  },
  {
    text: "Hello, Luthadel!",
    user: "Elend Venture",
    added: formatDate(new Date()),
    id: 2,
  },
];

indexRouter.get("/", indexController.indexGet);

module.exports = { indexRouter, messages };
