import ItemList from "./ItemList/ItemList";
import { useGlobalStates } from "../../context/cointext";
import Spiner from "./Spiner";

let ItemListContainer = ()=>{
    const {loading} = useGlobalStates()

    return(
        <div className="container">{loading ? <Spiner/> : <ItemList></ItemList> }</div>
        
    );
}

export default ItemListContainer