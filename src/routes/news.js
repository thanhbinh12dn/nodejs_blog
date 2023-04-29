const express = require("express");
const router = express.Router();

const newsController = require("../app/controllers/NewsController");

router.get("/sao-no-cu-ra-nhu-nay", newsController.show2);
router.get("/:slug", newsController.show);
router.get("/", newsController.index);

module.exports = router;
