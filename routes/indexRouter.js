const express = require("express");
const indexRouter = express.Router();

const formatDate = require("../utils/formatDate")

const messages = [
   {
      text: "Hello, Viltrum!",
      user: "Thragg",
      added: formatDate(new Date())
   },
   {
      text: "Hello, Luthadel!",
      user: "Elend Venture",
      added: formatDate(new Date())
   }
]

indexRouter.get("/", (req, res) => {
   res.render("index", { messages: messages});
});

indexRouter.post("/new", (req, res) => {
   const {user, message} = req.body
   messages.push({
      text: message,
      user: user,
      added: formatDate(new Date())
   })

   res.redirect("/")
})

module.exports = indexRouter;
