exports.newGet = (req, res, next) => {
  res.render("form");
};

exports.newPost = (req, res, next) => {
  const { user, message } = req.body;
  messages.push({
    text: message,
    user: user,
    added: formatDate(new Date()),
    id: messages.length + 1,
  });

  res.redirect("/");
};
