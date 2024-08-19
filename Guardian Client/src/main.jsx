import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import SignIn from './pages/sign-in/SignIn.jsx';
import Next from './pages/next/next.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/next" element={<Next />} />
      </Routes>
    </Router>
  </StrictMode>
);
