import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Retail from './pages/Retail'
import Industrial from './pages/Industrial'
import AllProducts from './pages/AllProducts'
import WhatsAppChat from './components/WhatsAppChat'



function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
 
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/retail" element={<Retail />} />
            <Route path="/industrial" element={<Industrial />} />
            <Route path="/all-products" element={<AllProducts />} />
            
          </Routes>
        </main>
        <Footer />
        <WhatsAppChat />
      </div>
    </Router>
  )
}

export default App