import React from "react";
import '../App.css'
import Props from "./Props";
import { useState } from "react";

export const Hello = () => {

    const [count, setCount] = useState(0)

    function counter(){
        setCount(count + 1)
    }
    
    return (
        <div>
            <h1>Hello Ashu, WelCome React Tutorials</h1>
            
            <Props name="Ashu" rollno='10' />
            <p>You are Great Person</p>
            
            <Props name="Soham" rollno='11' />
            <button onClick={counter}>Button</button>
            <h1>Count = {count} </h1>
            
            <Props name="Nikhil" rollno='12' />

        </div>
    );
}