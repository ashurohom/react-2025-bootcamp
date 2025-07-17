import React from "react";
import '../App.css'
import Props from "./Props";

export const Hello = () => {
    return (
        <div>
            <h1>Hello Ashu, WelCome React Tutorials</h1>
            
            <Props name="Ashu" rollno='10' />
            <p>You are Great Person</p>
            
            <Props name="Soham" rollno='11' />
            <button>Button</button>
            
            <Props name="Nikhil" rollno='12' />

        </div>
    );
}