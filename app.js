require("dotenv").config();

const express = require("express");
const path = require("node:path");
const app = express();

const { indexRouter, messages } = require("./routes/indexRouter");
const newRouter = require("./routes/newRouter");
const detailsRouter = require("./routes/detailsRouter");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));
app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);
app.use("/new", newRouter);
app.use("/details", detailsRouter);
app.use((req, res) => {
  res.status(404).render("404");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`Listening on Port: ${PORT}`);
});
