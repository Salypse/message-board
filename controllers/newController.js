const db = require("../db/queries");
const formatDate = require("../utils/formatDate");

exports.newGet = (req, res, next) => {
  res.render("form");
};

exports.newPost = (req, res, next) => {
  const { user, message } = req.body;
  db.postNewMessage(user, message, formatDate(new Date()));

  res.redirect("/");
};
