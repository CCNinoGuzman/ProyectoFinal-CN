import { useGlobalStates } from '../../context/context'
import { Link } from 'react-router'
import React from 'react'

const Cart = () => {
 const {cart} = useGlobalStates()
 console.log("esto es cart", cart)
  return (
    <div className='row'>
     <h1>tus productos</h1>
      {cart.map((prod)=>{
        console.log('esto es prod', prod)
        return(
            <div className='col-md-6 card' key={prod.id}>
                <h2>{prod.titulo}</h2>
                <img src={prod.image} className='w-25' alt="" />
                <p>{prod.description}</p>
                <h3><b>${prod.price}</b></h3>
                <h4>Cantidad: {prod.quantity}</h4>
                <h4>Subtotal: ${prod.price * prod.quantity}</h4>
            </div>
        )
      })}
      <h1>Total: {}</h1>

      <Link to='/checkout'>Finalizar Compra</Link>
    </div>
  )
}

export default Cart
