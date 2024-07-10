import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import Benefits from './components/Benefits';
import Products from './components/Products';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Introduction />
      <Benefits />
      <Products />
      <Contact />
    </div>
  );
}

export default App;
