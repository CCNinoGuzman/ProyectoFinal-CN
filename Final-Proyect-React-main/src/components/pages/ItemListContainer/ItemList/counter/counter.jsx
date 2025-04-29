import { useState } from "react"

const CounterItem = ({stock})=>{
    const[numcounter, setNumcounter]=useState(0)
    
    const agree = ()=>{

        setNumcounter(numcounter+1)
    }
    const desagree = ()=>{
        setNumcounter(numcounter-1)
    }
    return(
      <div className="counterbox d-flex p-2">
        <button onClick={desagree} disabled={numcounter===0}>-</button>
        <h4 className="px-4">{numcounter}</h4>
        <button onClick={agree} disabled={numcounter>=stock}>+</button>
      </div>  
    )

}

export default CounterItem 