class NewsController {
  // [GET] /news
  index(req, res) {
    res.render("news");
  }

  // [GET] /news/:slug
  show(req, res) {
    res.send("New Detail!!!");
  }

  show2(req, res) {
    res.send("New page!!!");
  }
}

module.exports = new NewsController();
