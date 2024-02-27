const express = require("express");
const router = express.Router();

const reviewsCtrl = require("../controllers/reviews");

router.get("/new", reviewsCtrl.new);


module.exports = router;
