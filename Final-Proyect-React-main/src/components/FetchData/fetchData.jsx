import { datalist, div } from "framer-motion/client";
import React, { useEffect, useState } from "react";

const FetchData = ()=>{

    const [dataList, setDatalist] =   useState([])  

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => setDatalist(data));
    }, [])
    console.log(dataList);

    return(
        <div className="container">
            <div className="row">
            {dataList.map((value)=>{
                return(
                    <>
                    <div key={value.id} className="col-md-12 card p-5 w-50">
                        <h3>{value.title}</h3>
                        <img src={value.image} alt="" />
                        <span>{value.description}</span>
                    </div>
                    </>
                )
            })}
            </div>
            
        </div>
    )
}

export default FetchData