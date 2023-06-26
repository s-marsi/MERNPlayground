const mongoose = require("mongoose");

exports.Produit = mongoose.model('produits', {
  titre : String,
  description : String,
  date : {
    type : Date,
    default : new Date(),
  }
});

