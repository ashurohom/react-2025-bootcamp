import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App, Newapp } from './App.jsx'
import { Hello } from './components/Hello.jsx'
import Form from './components/form.jsx'
import UseEffect from './components/UseEffect.jsx'
import AutoCounter from './components/UseEffectCounter.jsx'
import Parent from './components/Parent.jsx'
import Fetch_API from './components/Fetch_API.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
      <Routes>

            {/* <App /> */}
            {/* <Newapp />  */}
            {/* <Hello /> */}
            {/* <Form /> */}
            {/* <UseEffect /> */}
            {/* <AutoCounter /> */}
            {/* <Parent /> */}
            {/* <Fetch_API /> */}

            <Route path="/" element={<Parent />} />
            <Route path="/Hello" element={<Hello />} />
            <Route path="/Fetch_API" element={<Fetch_API />} />
        

        </Routes>
      </BrowserRouter>
  </StrictMode>
)
