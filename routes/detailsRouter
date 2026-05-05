const express = require("express")
const detailsRouter = express.Router()

const getMessageById = require("../utils/getMessage")

detailsRouter.get("/:messageId",(req, res) => {
    const message = getMessageById(req.params.messageId)
    res.render("details", {message: message})
})

module.exports = detailsRouter