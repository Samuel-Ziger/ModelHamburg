
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from '@/contexts/CartContext';
import { Toaster } from '@/components/ui/toaster';
import Navbar from '@/components/layout/Navbar';
import Home from '@/pages/Home';
import Menu from '@/pages/Menu';
import About from '@/pages/About';
import Contact from '@/pages/Contact';
import Feedback from '@/pages/Feedback';
import Cart from '@/pages/Cart';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
          <Navbar />
          <main className="pt-20">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cardapio" element={<Menu />} />
              <Route path="/sobre" element={<About />} />
              <Route path="/contato" element={<Contact />} />
              <Route path="/feedback" element={<Feedback />} />
              <Route path="/carrinho" element={<Cart />} />
            </Routes>
          </main>
          <Toaster />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
