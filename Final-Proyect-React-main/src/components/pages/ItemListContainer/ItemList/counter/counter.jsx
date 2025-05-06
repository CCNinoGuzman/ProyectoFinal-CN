import { useState } from "react"

const CounterItem = ({stock, counter, setCounter})=>{
    
    const agree = ()=>{

      setCounter(counter+1)
    }
    const desagree = ()=>{
      setCounter(counter-1)
    }
    return(
      <div className="counterbox d-flex p-2">
        <button onClick={desagree} disabled={counter===0}>-</button>
        <h4 className="px-4">{counter}</h4>
        <button onClick={agree} disabled={counter>=stock}>+</button>
      </div>  
    )

}

export default CounterItem 