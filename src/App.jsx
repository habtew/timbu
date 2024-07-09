// import { useState } from 'react'
// import Header from './components/header/Header'
// import Main from './components/main/Main'
// import Footer from './components/footer/Footer'
// import './App.css'
// import Checkout from './checkout/Checkout'
// import Cart from './cart/Cart'

// function App() {
  
//   return (
//     <div className='app'>
//       <Header />
//       {/* <Main /> */}
//       <Checkout />
//       {/* <Cart /> */}
//       <Footer />
//     </div>
//   )
// }

// export default App

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import Checkout from './checkout/Checkout';
import Cart from './cart/Cart';
import './App.css';

function App() {
  return (
    <Router>
      <div className='app'>
        <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
