import Welcome from "./Welcome";
// import Footer from "./Footer";
import { useState } from "react";

function App(){
    const [count,setCount] = useState(0);
    function handelClick() {
      setCount(count+1);
    }

  return(
    <div>
      <h1>Ashitosh Rohom</h1>
      <Welcome name="Ashitosh"/>
      <p>React First Class</p>
      {/* <Footer/> */}

      <p>You Clicked <b> {count} </b> Times</p>
      <button onClick={handelClick}>Click Me</button>
    </div>
  );
}

export default App;