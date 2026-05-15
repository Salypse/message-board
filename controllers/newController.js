const db = require("../db/queries");
const formatDate = require("../utils/formatDate");
const { body, validationResult } = require("express-validator");

const validateMessage = [
  body("user")
    .trim()
    .notEmpty()
    .withMessage("Username can not be empty.")
    .isAlpha()
    .withMessage("Username must only contain alphabet letters."),
  body("message")
    .trim()
    .notEmpty()
    .withMessage("Message can not be empty.")
    .isLength({ max: 250 })
    .withMessage("Message must be less than 250 characters."),
];

exports.newGet = (req, res, next) => {
  res.render("form");
};

exports.newPost = [
  validateMessage,
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).render("form", { errors: errors.array() });
    }
    const { user, message } = req.body;
    db.postNewMessage(user, message, formatDate(new Date()));

    res.redirect("/");
  },
];
