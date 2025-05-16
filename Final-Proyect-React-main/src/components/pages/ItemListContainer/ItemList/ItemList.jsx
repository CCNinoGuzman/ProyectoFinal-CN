import { Link, useParams } from "react-router";
import { useGlobalStates } from "../../../context/context";

const ItemList = ({list})=>{
    const {loading} = useGlobalStates()
    const {category} = useParams()
    return(
        <div className="container row">
          <h1 className="mb-5">Productos {category}</h1>
            {list.map((value)=>{
                return(
                    <div key={value.id} className="col-md-4 card p-5">
                        <h5><i>{value.category}</i></h5>
                        <h3>{value.titulo}</h3>
                        <img src={value.image} alt="" />
                        <span>{value.description}</span>
                        <h4>Precio: ${value.price}</h4>
                        <Link to={"/item/" + value.id}><button className="btn btn-primary">Ver más</button></Link>   
                    </div>
                )
            })} 
        </div>
    )
}

export default ItemList