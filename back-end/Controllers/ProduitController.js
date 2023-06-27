const produit = require("../Models/Produit");

module.exports = {
  getAll: (req, res) => {
    produit.find().then((produit) =>
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

  destroy: (req, res) => {
    produit
      .findByIdAndDelete(req.params.id)
      .then((produit) =>
        res.status(200).json({
          success: "True",
          message: "produit est supprimer",
        })
      )
      .catch((err) =>
        res.json({
          success: "False",
          message: err,
        })
      );
  },

  create: async (req, res) => {
    const newProduit = await produit
      .create(req.body)
      .then((produit) =>
        res.status(200).json({
          succes: "True",
          data: produit,
          message: "Produit ajouter avec success",
        })
      )
      .catch((err) =>
        res.json({
          succes: "False",
          message: err,
        })
      );
  },

  update: async (req, res) => {
    const produit = await produit
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((produit) =>
        res.status(200).json({
          success: "True",
          data: produit,
          message: "Produit update avec success",
        })
      )
      .catch((err) =>
        res.status(501).json({
          succes: "False",
          message: err,
        })
      );
  },
};
