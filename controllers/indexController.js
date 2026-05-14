const messages = [{ id: "1", text: "hello", user: "test", added: "test time" }];

exports.indexGet = (req, res, next) => {
  res.render("index", { messages: messages });
};
