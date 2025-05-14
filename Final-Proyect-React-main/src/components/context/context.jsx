import { createContext, useContext, useState, useEffect } from "react";
import { getProducts, getProductsApple } from "../services/firebaseService";

export const GlobalStates = createContext()

const ContextProvider =  ({children}) => {
    const [cart, setCart] = useState([])
    const [dataList, setdataList] = useState([]);
    const [dataListApple, setdataListApple] = useState([]);
    const [loading, setLoading] = useState(true);

    
    useEffect(()=>{
        setLoading(true)
        getProducts().then(res => {
            console.log("productos ", res)
            setdataList(res)
            setLoading(false)
        })
    },[])

    useEffect(()=>{
        setLoading(true)
        getProductsApple().then(res => {
            console.log("productosApple ", res)
            setdataListApple(res)
            setLoading(false)
        })
    },[])

    return (
        <GlobalStates.Provider value={{cart, setCart, dataList, dataListApple, loading, setLoading}}>{children}</GlobalStates.Provider>
    )
} 

export default ContextProvider

export const useGlobalStates = ()=>{
    return useContext(GlobalStates)
}