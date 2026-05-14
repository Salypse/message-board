const getMessageById = require("../utils/getMessage");

exports.detailsGet = (req, res, next) => {
  const message = getMessageById(req.params.messageId);
  res.render("details", { message: message });
};
