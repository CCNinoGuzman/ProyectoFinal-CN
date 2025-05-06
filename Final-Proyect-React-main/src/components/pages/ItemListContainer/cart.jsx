import React from 'react'
import { useGlobalStates } from '../../context/cointext'

const Cart = () => {
 const {cart} = useGlobalStates()
 console.log(cart)
  return (
    <div className='row'>
     <h1>tus productos</h1>
      {cart.map((prod)=>{
        return(
            <div className='col-md-6 card' key={prod.id}>
                <h2>{prod.title}</h2>
                <img src={prod.image} className='w-25' alt="" />
                <p>{prod.description}</p>
                <h3><b>${prod.price}</b></h3>
                <h4>Cantidad: {prod.quantity}</h4>
                <h4>Subtotal: ${prod.price * prod.quantity}</h4>
            </div>
        )
      })}
    </div>
  )
}

export default Cart
