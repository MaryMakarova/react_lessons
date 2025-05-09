import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NewArrivals from './pages/NewArrivals';
import Registration from './pages/Registration';
import Catalog from './pages/Catalog';
import Cart from './pages/Cart';
import Header from './components/Header';
import Footer from './components/Footer';
import Subscribe from './components/Subscribe';


function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new-arrivals" element={<NewArrivals />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>
      <Subscribe />
      <Footer />
    </Router>
  );
}

export default App;
