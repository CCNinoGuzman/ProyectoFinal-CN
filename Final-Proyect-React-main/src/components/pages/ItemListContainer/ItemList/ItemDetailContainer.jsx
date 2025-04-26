import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
      
const ItemDetailContainer = ()=>{
   const [data, setdata] = useState({})
   const {id} = useParams()
   
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
         <ul>
            <h1>{data.title}</h1>
            <span>{data.price}</span>
         </ul>
      </>
      
   )
 
}

export default ItemDetailContainer