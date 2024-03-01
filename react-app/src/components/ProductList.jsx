import ProductCard from './ProductCard';
import { useState } from 'react';

// import the array of movie objects
import productsData from "../assets/products.json";

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
      {products.map(product => {
        return (
            <ProductCard key={product.id} product={product} hideProduct={hideProduct} />
        )
      })}
    </div>
  );
}

export default ProductList;
