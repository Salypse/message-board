const express = require("express");
const newRouter = express.Router();
const newController = require("../controllers/newController");

newRouter.get("/", newController.newGet);
newRouter.post("/", newController.newPost);

module.exports = newRouter;
