
import "./ProductDetailsPage.css";
import { useParams, Link, Navigate , useLocation} from "react-router-dom";
import { useState } from "react";
import ProductCard from "./ProductCard";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function ProductDetailsPage(props) {

  const location = useLocation();
  const productId = location.state?.productId;
  const [products] = useState(props.products); // Assuming props.products is your products array

  const product = products.find((product) => product.id === productId);

// console.log(products);
// console.log(productId)
// const product = products.filter((product) => product.id == productId);



  
  if (!product) {
    return (
      <>
        <h1>We don't have it in stock at the moment, sorry for the inconvenient!</h1>
        <Link to="*">Go back home</Link>
      </>
    );
}

  let sliderSettings ={
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    
    <div key={product.id} className="product-choice">

      <h1 className="prod-headline">Product Details</h1>
          <Slider {...sliderSettings} className="slick-slider">
            {product.images.map((image, index) => (
              <div key={index} className="slick-slide">
                <img src={image} alt={index + 1} className="slick-image"/>
              </div>
            ))}
          </Slider>
          
            <h2 className="product-tag">{product.title}</h2>
            <em className="product-details">{product.description} </em>
            <p className="product-price"> ${product.price} <p className="product-discount">({product.discountPercentage} % off!)</p></p>
            {/* <p className="product-discount"> {product.discountPercentage} % off!</p> */}

            <div className="product-info-box">
            <p className="product-rate"> <strong>Rating:</strong> {product.rating} ⭐</p>
            <p className="product-stock"> <strong>Stock:</strong> {product.stock}</p>
            <p className="product-brand"> <strong>Brand:</strong> {product.brand}</p>
            <p className="product-category"> <strong>Category: </strong>{product.category}</p>
            </div>
      </div> 
  );
}

export default ProductDetailsPage;