import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ServicesPage from '../pages/ServicesPage';
// import AboutPage from '../pages/Aboutpage';

const Router = () => {
  return (
    <Routes>
      {/* Define routes for each page */}
      <Route path="/" element={<HomePage />} />
      {/* <Route path="/about" element={<AboutPage />} /> */}
      <Route path="/services" element={<ServicesPage />} />
    </Routes>
  );
};

export default Router;
