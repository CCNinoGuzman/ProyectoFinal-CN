import FetchData from "../FetchData/fetchData";

let ItemListContainer = ({text})=>{
    return(
        <div className="container">
            <section
                className="Section1 p-5 text-center">
                <h2>{text}</h2> 
            </section>
            <FetchData></FetchData>
        </div>
        
    );
}

export default ItemListContainer