import React, { Fragment, useEffect } from "react";
import "./Home.css";
import ProductCard from "./ProductCard.js";
import MetaData from "../layout/MetaData";
import { getProduct } from "../../actions/productAction";
import { clearErrors } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";

const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  let { loading, error, products } = useSelector((state) => state.products);
  // products = [products];

    useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }
        dispatch(getProduct());
    }, [dispatch, error, alert]);
  return (
    <Fragment>
      {loading ? (
         <Loader />
       ) : (
        <Fragment>
           <MetaData title="ECOMMERCE" />
      <MetaData title="ECOMMERCE" />
      <div className="banner">
        <p>Welcome to <span>Ecommerce</span></p>
        <h1><span>F</span>IND AMAZING PRODUCTS BELOW</h1>
        <a href="#container">
          <button>
            Scroll
          </button>
        </a>
      </div>

      <h2 className="homeHeading" id="container">Featured Products</h2>
      <div className="container">
        {products &&
               products.map((product) => (
                 <ProductCard key={product._id} product={product} />
               ))}
      </div>
      </Fragment>
       )}
    </Fragment>
  );
};

export default Home;