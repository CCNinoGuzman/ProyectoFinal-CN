import React, { useEffect, useState } from 'react'
import { useGlobalStates } from '../context/context'
import { createOrder } from '../services/firebaseService'
import Swal from 'sweetalert2'

const Checkout = () => {
  const {cart, calcularTotal} = useGlobalStates()
  const [user, SetUser] = useState({
    name:'Camilo ',
    email:'Carastaman1@gmail.com',
    phone: '31769854066',
  }) 
  const handleSubmit= event =>{
    event.preventDefault()
    let newOrder={
      buyer: user,
      total: calcularTotal,
      items: cart,
      date: new Date(),
    }
    //llamar al servicio de crear Orden
    // mando la info de user + cart
    createOrder(newOrder)
      .then((res)=>{
        Swal.fire({
          title: "Compra Exitosa!",
          text: `tu orden es la numero: ${res.id}`,
          icon: "success"
        });
      })
      .catch((err)=>{
        console.log(err)
      })
    
  }
  return (
    <div>
      <div className="container">
        <form onClick={handleSubmit} className='w-50'>
          <div className="form-group">
            <label htmlFor="">Nombre</label><input  className='form-control' type="text" />
            <label htmlFor="">Email</label><input  className='form-control'type="text" />
            <label htmlFor="">Telefono</label><input className='form-control' type="text" />
            <label htmlFor="">Domicilio</label><input  className='form-control'type="text" />
            <label htmlFor="">Fecha de Naciemiento</label><input className='form-control' type="text" />
            <input type="submit" className='mt-4 btn btn-success' />
          </div>
        </form> 
      </div>

    </div>
  )
}

export default Checkout
