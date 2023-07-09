const express = require("express");

const router = express.Router();

const produitController = require("../Controllers/ProduitController");

router.get("/", produitController.getAll);
router.get("/:id", produitController.showDetail);
router.post("/ajouter", produitController.create);
router.put("/edit/:id", produitController.update);
router.delete("/:id", produitController.destroy);

module.exports = router;