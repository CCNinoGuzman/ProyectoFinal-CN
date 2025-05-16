import ItemList from "./ItemList/ItemList";
import { useGlobalStates } from "../../context/context";
import Spiner from "./Spiner";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getProducts, getByCategory } from "../../services/firebaseService";

let ItemListContainer = ()=>{
    const [dataList, setdataList] = useState([])
    const {loading, setLoading} = useGlobalStates()
    const {category} = useParams()
    
    useEffect(()=>{
        setLoading(true)
        const fetchlista = category ? getByCategory : getProducts
        fetchlista(category).then(res => {
            setdataList(res)
            setLoading(false)
        })
    },[category])
    return(
        <div className="container">{loading ? <Spiner/> : <ItemList list={dataList}></ItemList> }</div>   
    );
}

export default ItemListContainer