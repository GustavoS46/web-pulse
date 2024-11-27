import React from 'react'
import Header from './section/Header/Header'
import Hero from './components/Hero/Hero'
import Services from './components/Services/Services'
import About from './components/About/About'
import Counter from './components/Counter/Counter'
import Pricing from './components/Pricing/Pricing'
import Clients from './components/Clients/Clients'
import Contact from './components/Contact/Contact'
import Footer from './section/Footer/Footer'

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <About />
      <Counter />
      <Pricing />
      <Clients />
      <Contact />
      <Footer />
    </>
  )
}

export default App