const produit = require("../Models/Produit");

module.exports = {
  getAll: (req, res) => {
    produit
      .find()
      .then((produit) =>
        res.status(200).json({
          success: "True",
          data: produit,
        })
      )
      .catch((err) =>
        res.json({
          success: "false",
          message: err,
        })
      );
  },

  showDetail: (req, res) => {
    produit
      .findById(req.params.id)
      .then((produit) =>
        res.status(200).json({
          success: "True",
          data: produit,
        })
      )
      .catch((err) =>
        res.json({
          success: "False",
          message: err,
        })
      );
  },
  destroy : (req, res) => {
    produit.findByIdAndDelete(req.params.id).then((produit) => res.status(200).json({
      success : "True",
      message : 'produit est supprimer'   
    })).catch(err => res.json({
      success : "False",
      message : err
    }))
  },
  
};
