const db = require("../db/queries");

async function detailsGet(req, res, next) {
  const message = await db.getMessageById(req.params.messageId);
  res.render("details", { message: message });
}

module.exports = {
  detailsGet,
};
