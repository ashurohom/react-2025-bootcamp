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
    {<Props name="Ashu" />}
    {<Props name="Soham" />}
    {<Props name="Nikhil" />}
    
  </StrictMode>,
)
