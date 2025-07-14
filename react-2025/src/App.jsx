import Welcome from "./Welcome";
// import Footer from "./Footer";
import { useState } from "react";

function App(){
    const [count,setCount] = useState(0);
    function handelClick() {

    }

  return(
    <div>
      <h1>Ashitosh Rohom</h1>
      <Welcome name="Ashitosh"/>
      <p>React First Class</p>
      {/* <Footer/> */}
    </div>
  );
}

export default App;