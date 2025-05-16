import { createContext, useContext, useState, useEffect } from "react";
import { getProducts, getProductsApple } from "../services/firebaseService";

export const GlobalStates = createContext()

const ContextProvider =  ({children}) => {
    const [cart, setCart] = useState([])
    const [dataListApple, setdataListApple] = useState([]);
    const [loading, setLoading] = useState(true);

    //llamado a firebase

    const calcularItems = cart.reduce((total, prod) => {
        return total + prod.quantity
    }, 0)

    const calcularTotal = cart.reduce((total, prod) => {
        return total + (prod.quantity * prod.price)
    }, 0)

    return (
        <GlobalStates.Provider value={{
            calcularTotal, 
            calcularItems, 
            cart, 
            setCart, 
            dataListApple, 
            loading, 
            setLoading, }
        }>{children}</GlobalStates.Provider>
    )
} 

export default ContextProvider

export const useGlobalStates = ()=>{
    return useContext(GlobalStates)
}