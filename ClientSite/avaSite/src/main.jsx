import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import './index.css';
import InformationPage from './pages/InformationPage';
import FilmsPage from './pages/FilmsPage';
import MessagesPage from './pages/MessagesPage';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InformationPage />} />
        <Route path="/information" element={<InformationPage />} />
        <Route path="/films" element={<FilmsPage />} />
        <Route path="/messages" element={<MessagesPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
 