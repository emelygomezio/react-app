import ProductCard from './ProductCard';
import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import ProductDetailsPage from './ProductDetailsPage';
import productsData from "../assets/products.json"

// import the array of movie objects


function ProductList() {
  // Declare a state variable "movies"
  // and set the array from movies-data.json as the initial state
  const [products, setProducts] = useState(productsData);

  const hideProduct = productId => {
   
    const filteredProducts = products.filter((product) => {
      return product.id !== productId;
    }); 
   
      setProducts(filteredProducts);
  };

  return (
    <div>
      <h2 className="product-title">New Products</h2>
      {products.map(product => {
        return (
            <ProductCard key={product.id} product={product} hideProduct={hideProduct} />
        )
      })}
    </div>
  );
}

export default ProductList;
