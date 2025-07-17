import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import { App, Newapp } from './App.jsx'
import { Hello } from './components/Hello.jsx'
import Props from './components/Props.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Newapp /> */}
    {<Hello />}
    {<Props name="Ashu" rollno='10' />}
    {<Props name="Soham" rollno='11' />}
    {<Props name="Nikhil" rollno='12' />}
    
  </StrictMode>,
)
