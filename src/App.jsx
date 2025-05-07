import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductListing from './Component/ProductListing';
import Footer from './Component/Footer';
import Login from './pages/Login';
import Signup from './pages/Signup';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/dashboard"
          element={
            <>
              <ProductListing />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
