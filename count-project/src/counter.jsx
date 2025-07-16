import { useState } from "react"
import './app.css'

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
            <h6 className="name">Counter</h6>
            <h3>Count Is {count}</h3>
            <button className="b1" onClick={button}>CLick Me + </button>
            <button className="b2" onClick={button1}>CLick Me - </button>
            <button className="b3" onClick={button2}>Reset</button>
     </>   
    )
}
export default Counter