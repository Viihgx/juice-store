import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Introduction from './components/Introduction/Introduction';
import Benefits from './components/Benefits/Benefits';
import Products from './components/Products/Products';
import Contact from './components/Contact/Contact';
import CartPage from './components/Page/CartPage';
import Footer from './components/Footer/Footer';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <Router>
      <div className="App">
        <Header cartCount={cart.length} />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Introduction />
              <Benefits />
              <Products addToCart={addToCart} />
              <Contact />
              <Footer />
            </>
          } />
          <Route path="/cart" element={<CartPage cart={cart} setCart={setCart} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
