import { useState } from "react"

function Counter(){
    const [count, setCount] = useState(0)
    function button(){
        setCount(count + 1);
    }
    function button1(){
        setCount(count - 1);
    }
    function button2(){
        setCount(0);
    }
    return(
        <>
            <h6>Counter</h6>
            <h3>Count Is {count}</h3>
            <button onClick={button}>CLick Me + </button>
            <button onClick={button1}>CLick Me - </button>
            <button onClick={button2}>Reset</button>
     </>   
    )
}
export default Counter