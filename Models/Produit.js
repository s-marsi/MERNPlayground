const mongoose = require("mongoose");

const Produit = mongoose.model('produits', {
  titre : String,
  description : String,
  date : {
    type : Date,
    default : new Date(),
  }
});

module.exports = Produit;

