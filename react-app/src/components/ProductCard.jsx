import productsData  from '../assets/products.json';
import { useState } from 'react';

function ProductCard() {
    const [products, setProducts] = useState(productsData);
  
    return (

        <div>
        {products.map(product => (
            <div key={product.id} className="ProductCard">

            <img /* Sera un carrusel de imagenes*/
            src={product.images}
            alt={product.description}
            width='350px'
            />
            
            <h2>Product:{product.title}</h2>
            <h3>Description: {product.description} </h3>
            <p> Price:{product.price}</p>
            <p> Discount: {product.discountPercentage}</p>
            <p> Rating: {product.rating}</p>
            <p> Stock: {product.stock}</p>
            <p> Brand: {product.brand}</p>
            <p> Category: {product.category}</p>
    
    
            {/* <button onClick={() => deleteMovie(movie._id)} className="btn-delete"> */}
              {/* Delete{" "}
            </button> */}
          </div>
             ))}
        </div>
        
    );

  }
  
  export default ProductCard;


// const categoryLabel = (category) =>{
    //switch()
//} 



//   import React, { useState } from 'react';
// import travelPlansData from "../assets/travel-plans.json";

// function TravelList() {
//     const [plans, setPlans] = useState(travelPlansData);

//     const deletePlan = (id) => {
//         const updatedPlans = plans.filter(plan => plan.id !== id);
//         setPlans(updatedPlans);
//     };

//     const getLabels = (plan) => {
//         let labels = [];
//         if (plan.totalCost <= 350) {
//             labels.push(<span key="great-deal" className="label great-deal">Great Deal</span>);
//         }
//         if (plan.totalCost >= 1500) {
//             labels.push(<span key="premium" className="label premium">Premium</span>);
//         }
//         if (plan.allInclusive) {
//             labels.push(<span key="all-inclusive" className="label all-inclusive">All-Inclusive</span>);
//         }
//         return labels; // Returns an array of JSX elements
//     };

//     return (
//         <div>
//             {plans.map(plan => (
//                 <div key={plan.id} className='.travel-paln'>
//                     <img src={plan.image} alt={plan.destination} />
//                     <h1>{plan.destination} ({plan.days} days)</h1>
//                     <p>{plan.description}</p>
//                     <p><span>Price:</span> {plan.totalCost} €</p>           
//                     <div className="labels-container">
//                         {getLabels(plan)} 
//                     </div>
//                     <button className='button-delete' onClick={() => deletePlan(plan.id)}>Delete</button>
//                     </div>
//             ))}
//         </div>
//     );
// }

// export default TravelList;
  