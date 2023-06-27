import { Link } from "react-router-dom";
import {useEffect, useState} from "react";
import axios from 'axios';
import './css/Home.css';
const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:4000/gestionproduit/produit")
    .then(res => setProducts(res.data.data));
  }, [])
  return (
    <div className="home-container  d-flex justify-content-center mt-5">

    { products?
      products.map((product, index) => 
      <div className="card text-center m-3" style={{ "width": "18rem", "height": "100%"}} key={index}>
        <img class="card-img-top" src="images/computer.png" alt={product.titre} /> 
        <div className="card-body">
          <h5 className="card-title">{product.titre}</h5>
          <p className="card-text">
          {product.description}
          </p>
          <Link to="#" className="btn btn-show">
            Show Details
          </Link>
        </div>
      </div>
      ) 
      : "NO DATA"
    }
        </div>

  );
};

export default Home;
