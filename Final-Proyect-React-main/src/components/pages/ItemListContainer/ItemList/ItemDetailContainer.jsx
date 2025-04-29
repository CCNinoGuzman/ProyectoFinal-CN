import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import CounterItem  from "./counter/counter";    
const ItemDetailContainer = ()=>{
   const [data, setdata] = useState({})
   const {id} = useParams()
   const stock = 10
   
   useEffect(()=>{
      fetch(`https://fakestoreapi.com/products/${id}`)
         .then(response => response.json())
         .then(dataId =>{
            setdata(dataId)
         } );
   },[])

   console.log(data)
   
      return(
      
      <>
         <h1>detalles del producto</h1>
         <br /><br />
         <div className="row">
            <div className="col-md-5">
               <h2>{data.title}</h2>
               <h3>${data.price}</h3>
               <h4>Stock: {stock}</h4>

               <CounterItem stock={stock}/>
            </div>
            <div className="col-md-7">
               <img src={data.image} className="" alt="" style={{height:"250px"}} />
            </div>
         </div>
         
      </>
      
   )
 
}

export default ItemDetailContainer