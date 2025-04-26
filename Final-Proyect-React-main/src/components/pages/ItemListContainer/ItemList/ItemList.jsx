import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const ItemList = ()=>{
    const [dataList, setdataList] = useState([]);

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then((data)=>{setdataList(data)});
    },[])
    
    return(
        <div className="container row">
          <h1>Productos</h1>
            {dataList.map((value)=>{
                return(
                    <div key={value.id} className="col-md-4 card p-5">
                        <h3>{value.title}</h3>
                        <img src={value.image} alt="" />
                        <span>{value.description}</span>
                        <h4>{value.price}</h4>
                        <button><Link to={"/item/" + value.id}>Ver más</Link></button>   
                    </div>
                )
            })} 
        </div>
    )
}

export default ItemList