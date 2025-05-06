import { createContext, useContext, useState, useEffect } from "react";

export const GlobalStates = createContext()

const ContextProvider =  ({children}) => {
    const [cart, setCart] = useState([])
    const [dataList, setdataList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        setLoading(true)
        setTimeout(()=>{
            fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then((data)=>{setdataList(data)});
            setLoading(false)
            }, 3000
        )
        
    },[])

    return (
        <GlobalStates.Provider value={{cart, setCart, dataList, loading, setLoading}}>{children}</GlobalStates.Provider>
    )
} 

export default ContextProvider

export const useGlobalStates = ()=>{
    return useContext(GlobalStates)
}