import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router";
import CounterItem  from "./counter/counter";    
import { useGlobalStates } from "../../../context/cointext";
import Spiner from "../Spiner";

const ItemDetailContainer = ()=>{
   const [data, setdata] = useState({})
   const {id} = useParams()
   const[numcounter, setNumcounter]=useState(0)
   const {cart, setCart, loading, setLoading} = useGlobalStates()
   const stock = 10
   
   useEffect(()=>{
      fetch(`https://fakestoreapi.com/products/${id}`)
         .then(response => response.json())
         .then(dataId =>{
            setdata(dataId)
         } );
   },[])

   const addCar= ()=>{
      setCart([...cart, {...data, quantity: numcounter}])
   }
      return(
      
      <>
         <h1>detalles del producto</h1>
         <br /><br />
         <div className="row">
            {loading ?(<Spiner/>):(
               <>
               <div className="col-md-5">
               <h2>{data.title}</h2>
               <h3>${data.price}</h3>
               <h4>Stock: {stock}</h4>

               <CounterItem stock={stock} counter={numcounter} setCounter={setNumcounter}/>
               <button onClick={addCar} disabled={numcounter==0}>Agregar al carrito 🛒</button>
            </div>
            <div className="col-md-7">
               <img src={data.image} className="" alt="" style={{height:"250px"}} />
            </div>
               </>
            )}
            
         </div>
         
      </>
      
   )
 
}

export default ItemDetailContainer