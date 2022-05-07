import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import PageError from './pages/PageError';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* si le route est differente de ce qu'il y a au dessu alors : */}
        <Route path="/*" element={<PageError />} />
      
      </Routes>
    </BrowserRouter>
  );
};

export default App;




