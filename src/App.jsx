import React, { useState, useEffect } from 'react';
import './App.css';
import { jsonData } from './data.js';

import Header from './components/Header/Header.jsx';
import Hero from './components/Hero/Hero.jsx';
import Categories from './components/Categories/Categories.jsx';
import Products from './components/Products/Products.jsx';
import Footer from './components/Footer/Footer.jsx';

export default function App() { 
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setProducts(jsonData.products);
    setCategories(jsonData.categories);
  }, []);

  return (
    <div className="app"> 
      <Header />
      <main className="main-container">
        <Hero />
        <Categories categories={categories} />
        <Products products={products} />
      </main>
      <Footer />
    </div>
  );
}