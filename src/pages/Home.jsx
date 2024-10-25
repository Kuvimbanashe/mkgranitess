import React from 'react'
import HeroHeader from '../components/HeroHeader'
import ProductShowcase from '../components/ProductShowcase'
import AboutUs from '../components/AboutUs'
import Testimonials from '../components/Testimonials'
import Images from '../components/Images'

const Home =  () => {


  
  

  return (
    <div className="bg-gradient-to-b from-gray-100 to-white">
      <HeroHeader />
      <AboutUs />
      <div className="container mx-auto mt-16 px-4">
        <h2 className="text-4xl font-bold mb-8 text-primary text-center">Featured Products</h2>
        <div className="w-full">
          <ProductShowcase images={Images.featured} folder={'featured'} />
        </div>
      </div>
      <Testimonials />
    </div>
  )
}

export default Home
