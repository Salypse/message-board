const db = require("../db/queries");

async function indexGet(req, res, next) {
  const messages = await db.getAllMessages();
  res.render("index", { messages: messages });
}
module.exports = {
  indexGet,
};
