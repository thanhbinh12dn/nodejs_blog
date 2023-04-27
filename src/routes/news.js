const express = require("express");
const router = express.Router();

const newsController = require("../app/controllers/NewsController");

router.use("/sao-no-cu-ra-nhu-nay", newsController.show2);
router.use("/:slug", newsController.show);
router.use("/", newsController.index);

module.exports = router;
