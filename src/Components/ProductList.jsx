import React from 'react'
import Product from './Product'
import  products from '../data/products.json'

const ProductList = () => {
  return (
    <div className="container">
      <div className="row g-5 py-5">
        <Product product={products[0]} />
        <Product product={products[1]} />
        <Product product={products[2]} />
        <Product product={products[3]} />
        <Product product={products[4]} />
        <Product product={products[5]} />
        <Product product={products[6]} />
        <Product product={products[7]} />
        <Product product={products[8]} />
        <Product product={products[9]} />
        <Product product={products[10]} />
        <Product product={products[11]} />
        <Product product={products[12]} />
        <Product product={products[13]} />
        <Product product={products[14]} />
        <Product product={products[15]} />
        <Product product={products[17]} />
        <Product product={products[18]} />
        <Product product={products[19]} />
      </div>
    </div>
  );
}

export default ProductList
