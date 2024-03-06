import "./FilterPage.css";
import ProductCard from "./ProductCard";
import { useState } from "react";
import productsData from "../assets/products.json";
// import React, { useEffect } from "react";
import { useProducts } from "./ProductsContext";


function FilterPage({ products }) {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [filterPrice, setFilterPrice] = useState("");

  const applyFilter = () => {
    switch (filterPrice) {
      case "expensive":
        setFilteredProducts(products.filter((product) => product.price > 1000));
        break;
      case "moderate":
        setFilteredProducts(
          products.filter(
            (product) => product.price > 500 && product.price <= 1000
          )
        );
        break;
      case "affordable":
        setFilteredProducts(
          products.filter(
            (product) => product.price > 100 && product.price <= 500
          )
        );
        break;
      case "budgetFriendly":
        setFilteredProducts(products.filter((product) => product.price < 100));
        break;
      default:
        setFilteredProducts(products);
    }
  };

  return (
    <div>
      <h2 className="product-title">New Products</h2>
      <h3 className="filter-box-title"> Filter Products</h3>

    <div className="filter-container">
        {/* <p className="filter-tag">Filter</p> */}
        
        <div className="price-settings">
          <label className="price-title">Price</label>
          <div className="price-choices"> 
          <button onClick={() => setFilterPrice("expensive")} className="expensive">
            $1,000 - +
          </button>
          <button onClick={() => setFilterPrice("moderate")} className="moderate">
            $500 - $999
          </button>
          <button onClick={() => setFilterPrice("affordable")} className="affordable">
            $100 - $499
          </button>
          <button onClick={() => setFilterPrice("budgetFriendly")} className="budget-friendly">
            $0 - $99
          </button>
          <button onClick={() => setFilterPrice("")} className="clear-filter">Clear Filter</button>
        </div>
        </div>
      </div> 

      <div>
        {/* {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))} */}

{/*  
      {filteredProducts && filteredProducts.map((product, index) => {
        return (
       <ProductCard key={product.id} product={product} />
         )
      ))} */}

        {filteredProducts && filteredProducts.map((product,index) => {
        return (
            <ProductCard key={`${product.id}-${index}`} product={product} />
        )
        })}
        </div>
    </div>
  );
}

export default FilterPage;

// function Filter({ products }) {
//   const [filteredProducts, setFilteredProducts] = useState(products);
//   const [filterPrice, setFilterPrice] = useState("");

//   const applyFilter = () => {
//     switch (filterPrice) {
//       case "expensive":
//         setFilteredProducts(products.filter((product) => product.price > 1000));
//         break;
//       case "moderate":
//         setFilteredProducts(
//           products.filter(
//             (product) => product.price > 500 && product.price <= 1000
//           )
//         );
//         break;
//       case "affordable":
//         setFilteredProducts(
//           products.filter(
//             (product) => product.price > 100 && product.price <= 500
//           )
//         );
//         break;
//       case "budgetFriendly":
//         setFilteredProducts(products.filter((product) => product.price < 100));
//         break;
//       default:
//         setFilteredProducts(products);
//     }
//   };

//   return (
//     <div className="Filter">
//       <button onClick={() => setFilterPrice("expensive")}>$1,000 - more</button>
//       <button onClick={() => setFilterPrice("moderate")}>$500 - $999</button>
//       <button onClick={() => setFilterPrice("Affordable")}>$100 - $499</button>
//       <button onClick={() => setFilterPrice("budgetFriendly")}>$0 - $99</button>
//       <button onClick={() => setFilterPrice("")}>Clear Filter</button>


