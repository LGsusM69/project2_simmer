const express = require("express");
const router = express.Router();

const profilesCtrl = require("../controllers/profiles");


router.get("/", profilesCtrl.index);





module.exports = router;