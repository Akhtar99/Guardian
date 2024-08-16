import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import SignIn from './pages/sign-in/SignIn.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SignIn />
  </StrictMode>,
)
