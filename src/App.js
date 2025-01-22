import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import ProductPage from './Pages/ProductPage';
import ServicePage from './Pages/ServicePage';
import ContactPage from './Pages/ContactPage';

const App = () => {
    return (
        
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/Products" element={<ProductPage />} />
                <Route path="/Services" element={<ServicePage />} />
                <Route path="/Contact" element={<ContactPage />} /> 


            </Routes>
        </BrowserRouter>
    );
};

// Ensure you have a default export
export default App;