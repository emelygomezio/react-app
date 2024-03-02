
import React from 'react';
import { Link } from 'react-router-dom';


function ProductCard(props) {


  const {product, hideProduct} = props;

console.log(product);
  return (
    // <div className="product-selection">

     
        <div key={product.id} className="product-selection">
            <img
            className="product-images" /* Sera un carrusel de imagenes */
            src={product.images[0]}
            alt={product.description}
            width="350px"
          />          
            <h2 className="product-label">{product.title}</h2>
            <p className="product-price"> ${product.price}</p>
            <p className="product-disc"> {product.discountPercentage} % off!</p>
            <p className="product-rating"> Rating: {product.rating} ⭐</p>


          <button onClick={() => hideProduct(product.id)} className="btn-delete"> Hide{""} </button>
          
          {/* <Link to="/View-More">  <button className="btn-view-more"> View More {""}</button>  </Link> */}
          <Link to={`/View-More/${product.id}`} state={{ productId: product.id }}> <button className="btn-view-more"> View More {""}</button> </Link>
          
        </div>
    //  </div>
  );
}


export default ProductCard;


// src/components/MovieCard.jsx

// import React from 'react';

// function MovieCard(props) {
//     cç
  
//     return (
//       <div className="MovieCard">
//         <h3>{movie.title}</h3>
//         <p>Director: {movie.director}</p>
//         <p>Rating: {movie.IMDBRating}</p>
  
//         {/* {movie.hasOscars && <p>Got the Oscar Award! </p>}
//         {!movie.hasOscars && <p>Great movie but no Oscars! </p>} */}
//         {/*ternary style*/}
//         {movie.hasOscars ? <p>Got the Oscar Award! </p> : <p>Great movie but no Oscars!</p>}
  
//         <button onClick={() => clickToDelete(movie._id)} className="btn-delete">
//           Delete 
//         </button>
//       </div>
//     );
//   }
  
//   export default MovieCard;



