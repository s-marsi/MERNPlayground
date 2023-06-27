const mongoose = require("mongoose");

const Produit = mongoose.model('produits', {
  titre : String,
  description : String,
  categorie : {
    type : String,
    enum : ['computer', 'phone'],
    default : 'computer'
  },
  date : {
    type : Date,
    default : new Date(),
  }
});

module.exports = Produit;

