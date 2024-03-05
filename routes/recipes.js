const express = require("express");
const router = express.Router();

const recipesCtrl = require("../controllers/recipes");
//const { routes } = require("../server");


router.get("/new", recipesCtrl.new);

router.get("/:id", recipesCtrl.show)

router.post("/", recipesCtrl.create);

router.post("/:id/users/:id", recipesCtrl.addToCollection);

router.delete("/:id", recipesCtrl.delete);

router.get("/:id/edit", recipesCtrl.edit);

router.put("/:id/", recipesCtrl.update);

module.exports = router;