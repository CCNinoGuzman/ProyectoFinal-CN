import { useGlobalStates } from '../../context/context'
import { Link } from 'react-router'
import React from 'react'

const Cart = () => {
 const {cart, calcularTotal} = useGlobalStates()
  return (
    <>
    <div className='row'>
     <h1>Tus productos</h1>
      {cart.map((prod)=>{
        return(
            <div className='col-md-6 card p-4' key={prod.id}>
                <i>{prod.category}</i>
                <h4>{prod.titulo}</h4>
                <img src={prod.image} className='w-25' alt="" />
                <h3><b>${prod.price}</b></h3>
                <h4>Cantidad: {prod.quantity}</h4>
                <h4>Subtotal: ${prod.price * prod.quantity}</h4>
            </div>
        )
      })}
      
    </div>
    <div className="row p-4">
        <div className="col-md-3"><h3 className='pt-2'>Total: ${calcularTotal}</h3></div>
        <div className="col-md-3"><Link to='/checkout'><button className='btn btn-primary'>Finalizar Compra</button></Link></div>
      </div>
    </>
  )
}

export default Cart
