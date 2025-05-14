import { Link } from "react-router";
import { useGlobalStates } from "../../../context/context";

const ItemListApple = ()=>{
    const {dataListApple, loading} = useGlobalStates()
    
    return(
        <div className="container row">
          <h1>Productos Apple</h1>
            {dataListApple.map((value)=>{
                return(
                    <div key={value.id} className="col-md-4 card p-5">
                        <h3>{value.titulo}</h3>
                        <img src={value.image} alt="" />
                        <span>{value.description}</span>
                        <h4>Precio: ${value.price}</h4>
                        <button><Link to={"/itemA/" + value.id}>Ver más</Link></button>   
                    </div>
                )
            })} 
        </div>
    )
}

export default ItemListApple