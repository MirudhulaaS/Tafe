import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './Layout/Header';
import Footer from './Layout/Footer';

import Home from './components/Home';
import About from './components/About';
import Order from './components/Order';
import Contact from './components/Contact';

import Signin from './Auth/Signin';
import Signup from './Auth/Signup';

import Western from './Menu/Western';
import Wesnack from './Menu/Wesnack';
import Indian from './Menu/Indian';
import Insnack from './Menu/Insnack';
import Merchandise from './Menu/Merchandise';
import Gifts from './Menu/Gifts';

const App = () => {
  return (
    <Router>
      <div>
        <Header />

        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/order" element={<Order />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/login" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />

          <Route path="/western" element={<Western />} />
          <Route path="/wesnack" element={<Wesnack />} />
          <Route path="/indian" element={<Indian />} />
          <Route path="/insnack" element={<Insnack />} />
          <Route path="/merchandise" element={<Merchandise />} />
          <Route path="/gifts" element={<Gifts />} />

        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;

