const express = require("express");
const app = express();

const connectingMongoDb = require("./Db/db");

const routerProduit = require("./Routes/ProduitRouter");

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

require("dotenv").config();
app.use(express.urlencoded({extended : false}));

app.use(express.json());
app.use(express.static("./public"));

app.use("/gestionproduit/produit", routerProduit); 

const Start = async () =>{
  try{
    await connectingMongoDb(process.env.url);
    await app.listen(4000,()=>{console.log("Server Is Up");});
  }
  catch(error){
    console.log("error : ", error);
  }
}

Start();