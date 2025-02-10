import React, { useEffect } from 'react';
import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';

import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ProductsByCategory from './pages/ProductsByCategory';
import CategoryPage from './pages/CategoryPage';
import AdminPage from './pages/AdminPage';
import { Toaster } from 'react-hot-toast';
import ProductPage from './pages/ProductPage';
import Blank from './components/Blank';
import Gallery from './pages/Gallery';

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/category/:category" element={<ProductsByCategory />} />
          <Route path="/productPage/:productId" element={<ProductPage />} />
          <Route path="/gallery" element={<Gallery />} />
        </Route>

        <Route element={<Blank />}>
          <Route path="/categoryPage" element={<CategoryPage />} />
          <Route path="/adminPage" element={<AdminPage />} />
        </Route>
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
