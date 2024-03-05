const addNewProduct = (newProduct) => {
    const updatedProducts =[newProduct, ...products]
    setProducts(updatedProducts);
}