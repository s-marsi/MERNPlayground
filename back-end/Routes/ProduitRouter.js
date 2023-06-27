const express = require("express");

const router = express.Router();

const produitController = require("../Controllers/ProduitController");

router.get("/", produitController.getAll);
router.get("/:id", produitController.showDetail);
router.get("/ajouter", produitController.create);
router.get("/edit/:id", produitController.update);
router.get("/:id", produitController.destroy);

module.exports = router;