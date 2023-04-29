const newsRouter = require("./news");
const siteRouter = require("./site");
const courseRouter = require("./course");
const meRouter = require("./me");

function route(app) {
  app.use("/course", courseRouter);
  app.use("/me", meRouter);
  app.use("/news", newsRouter);
  app.use("/", siteRouter);
}

module.exports = route;
