const express = require("express");
const indexRouter = express.Router();

const messages = [
   {
      text: "Hello, Viltrum!",
      user: "Thragg",
      added: new Date()
   },
   {
      text: "Hello, Luthadel!",
      user: "Elend Venture",
      added: new Date()
   }
]

indexRouter.get("/", (req, res) => {
   res.render("index", { messages: messages});
});

module.exports = indexRouter;
