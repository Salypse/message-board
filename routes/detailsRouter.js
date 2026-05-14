const express = require("express");
const detailsRouter = express.Router();
const detailsController = require("../controllers/detailsController");

detailsRouter.get("/:messageId", detailsController.detailsGet);

module.exports = detailsRouter;
