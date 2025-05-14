import ItemListApple from "./ItemListApple";
import { useGlobalStates } from "../../../context/context";
import Spiner from "../Spiner";

let ItemListContainerAndroid = ()=>{
    const {loading} = useGlobalStates()

    return(
        <div className="container">{loading ? <Spiner/> : <ItemListApple/> }</div>   
    )
}

export default ItemListContainerAndroid