import Welcome from "./Welcome";
// import Footer from "./Footer";
import { useState } from "react";

function App(){
    const [count,setCount] = useState(0);
    function handelClick() {
      setCount(count+1);
    }
    
    function handelClicks() {
      setCount(count-1);
    }

    function handelClickss() {
      setCount(0);
    }

  return(
    <div>
      <h1>Ashitosh Rohom</h1>
      <Welcome name="Ashitosh"/>
      <p>React First Class</p>
      {/* <Footer/> */}

      <p>You Clicked <b> {count} </b> Times</p>
      <button onClick={handelClick}>Inc + </button>
      <button onClick={handelClicks}>Dec - </button>
      <button onClick={handelClickss}>Reset 0 </button>
    </div>
  );
}

export default App;