const express = require("express");
const router = express.Router();

const recipesCtrl = require("../controllers/recipes");
//const { routes } = require("../server");


router.get("/new", recipesCtrl.new);

router.post("/", recipesCtrl.create);



module.exports = router;