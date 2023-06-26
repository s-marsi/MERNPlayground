const mongoose = require("mongoose");

connMongo = (url) => {
  mongoose.connect(url).then(() => {
    console.log("server connected");
  }).catch(err => console.log("err : " + err));
}

module.exports =  connMongo;