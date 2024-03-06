import { useState } from 'react';
import ProductCard from './ProductCard';

function Filter ({ products }) {
    const [filteredProducts, setFilteredProducts] = useState(products);
    const [filterPrice, setFilterPrice] = useState ("")

    const applyFilter = () => {
        switch (filterPrice) {
            case 'expensive':
                setFilteredProducts(products.filter(product => product.price > 1000))
                break;
            case 'moderate':
                setFilteredProducts(products.filter(product => product.price > 500 && product.price <= 1000))
                break;
            case 'affordable':
                setFilteredProducts(products.filter(product => product.price > 100 && product.price <= 500))
                break;
            case 'budgetFriendly':
                setFilteredProducts(products.filter(product => product.price < 100))
                break;
            default:
                setFilteredProducts(products);
        }
    };
    
    return (
        <div className="Filter">
            <button onClick={() => setFilterPrice('expensive')}>$1,000 - more</button>
            <button onClick={() => setFilterPrice('moderate')}>$500 - $999</button>
            <button onClick={() => setFilterPrice('Affordable')}>$100 - $499</button>
            <button onClick={() => setFilterPrice('budgetFriendly')}>$0 - $99</button>
            <button onClick={() => setFilterPrice('')}>Clear Filter</button>

            <div>
            {filteredProducts.map(product => (
                <ProductCard key={ProductDetailsPage.id} product={product}/>
            ))}
            </div>
        </div>
    )
}

export default Filter