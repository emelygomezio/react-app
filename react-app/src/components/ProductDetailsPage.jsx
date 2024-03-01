import { useParams, Link, Navigate } from "react-router-dom";

function ProductDetailsPage({ products }) {
  const { productId } = useParams();
//   console.log("projectId -->", projectId);

  const product = products.find((product) => product.id === productId);
//   console.log(project);

  if (!product)
    return (
      <>
        <h1>We don't have it in stock at the moment, sorry for the inconvinient!</h1>
        {/* <Link to="/">Go back home</Link> */}
      </>
    );

  return (
  
      <div key={product.id} className="product-choice">
         
         <h1>Project Details</h1>
    
          <img
            className="product-img" /* Sera un carrusel de imagenes*/
            src={product.images}
            alt={product.description}
            width="350px"
          />
            <h2 className="product-tag">{product.title}</h2>
            <em className="product-details">{product.description} </em>
            <p> ${product.price}</p>
            <p> {product.discountPercentage} % off!</p>
            <p> Rating: {product.rating} ⭐</p>
            <p> Stock: {product.stock}</p>
            <p> Brand: {product.brand}</p>
            <p> Category: {product.category}</p>


      </div>
  );
}

export default ProductDetailsPage;