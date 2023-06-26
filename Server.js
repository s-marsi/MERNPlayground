const express = require("express");
const app = express();

const connectingMongoDb = require("./Db/db");

const routerProduit = require("./Routes/ProduitRouter");

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