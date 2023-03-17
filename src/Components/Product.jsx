import React from 'react'
import { Link } from 'react-router-dom'

const Product = ({ product}) => {
    return (
      <div className="col-12 col-md-6 col-lg-4">
            
      <div className='card'>
          <img src={product.image}  height={250} className="card-img-top"
                    alt="" />
                
          <div className="card-body">
              
          <h2>{product.title}</h2>
          <h4>{product.category}</h4>
          <p>{product.price}</p>
          <p>{ product.description}</p>
                <div className="card-foother">
                    <Link to={`/products/${product.id}`} className="btn btn-success d-block w-100">Read more</Link>
                </div>
                </div>
              </div>
              </div>
  )
}

export default Product
