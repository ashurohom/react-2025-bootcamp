import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/App.jsx'
import Footer from './components/Footer.jsx'
import Conditional from './components/conditional.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Footer />
    <Conditional />
  </StrictMode>,
)
