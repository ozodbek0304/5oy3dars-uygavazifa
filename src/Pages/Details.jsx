import React from 'react'
import { useParams } from 'react-router-dom'
import  products from '../data/products.json'

const Details = () => {
    const { productId } = useParams(); 
    const product = products.find((p) => p.id === +productId);
  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col-12 col-md-6 p-5">
          <h2>{product.title}</h2>
          <h4>{product.category}</h4>
          <p>{product.price}</p>
          <p>{product.description}</p>
        </div>
        <div className="col-12 col-md-6 py-5 ">
          <img src={product.image}  alt="" />
        </div>
      </div>
    </div>
  );
}

export default Details
