import { useState } from "react"

function Welcome(props) {
    const [count, setCount] = useState(0)

    function handelClick(){
        setCount(count+1);
    }

    function handelClicks(){
        setCount(count-1);
    }

    function handelClickss(){
        setCount(0);
    }

    return (
     <>
     <h3>WelCome {props.name}</h3>
     <h1>{props.course}</h1>

      <h1>Button Click Count Is {count}</h1>  
     <button onClick={handelClick}>CLick Me + </button>
     <button onClick={handelClicks}>CLick Me - </button>
     <button onClick={handelClickss}>CLick Me Reset </button>
     </>   
    )
}
export default Welcome