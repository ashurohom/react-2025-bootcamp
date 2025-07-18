import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App, Newapp } from './App.jsx'
import { Hello } from './components/Hello.jsx'
import Form from './components/form.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Newapp />  */}
    <Hello />
    <Form />

    
  </StrictMode>,
)
