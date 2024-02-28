const express = require("express");
const router = express.Router();

const profilesCtrl = require("../controllers/profiles");


router.get("/", recipesCtrl.index);



module.exports = router;