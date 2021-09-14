import React from 'react'
// import { Link } from 'react-router-dom'
export default function Item({ title, gtin, gender, salePrice, price, image }) {
  return (
    <article className='item'>
      <div className='img-container'>
        <img src={image} alt={title} />
      </div>
      <div className='item-footer'>
        <h3>{title}</h3>
        <p>Product Number: {gtin}</p>
        <p>Gender: {gender}</p>
        <h4>Price: {price}</h4>
        <p className="salePrice">Sale Price: {salePrice}</p>
        
      </div>
    </article>
  )
}