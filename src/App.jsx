import { useState } from 'react'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import Main from './components/main/Main'
import Footer from './components/footer/Footer'
import './App.css'

function App() {

  return (
    <div className='app'>
      <Header />
      <Hero />
      <Main />
      <Footer />
    </div>
  )
}

export default App
