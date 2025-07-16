import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/App.jsx'
import Name from './components/newfile.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Name />
  </StrictMode>,
)
