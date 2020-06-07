import React from 'react'

function Products(props){
  return(
    <div>
    <h3>{props.product.name}</h3>
    <p>{props.product.price.toLocaleString('en-US',{style:'currency',currency:'USD'})-{props.product.description}}</p>
    </div>
  )

}
export default Products
