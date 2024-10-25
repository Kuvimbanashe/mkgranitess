import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'

import Images from '../components/Images'

const Industrial = () => {
  
  /**
   *  Office kitchens
   *  Coworking desks
   *  Reception counters
   *  Cafeteria dining tables
   *  Bathroom counters
   
   */
 

  return (
    <div className="bg-gray-100 min-h-screen w-full">
      <div className="container mx-auto px-4 py-8 h-full w-full">
        <h1 className="text-6xl font-bold mb-8 text-primary text-center">Industrial Products</h1>

      

        {/* <h1 className="text-4xl font-bold mb-8 text-primary text-center mt-8">Office Kitchens</h1> 
       <ProductCard images={Images.kitchenette} folder="kitchenette" />

       <h1 className="text-4xl font-bold mb-8 text-primary text-center mt-8">Reception Counters</h1> 
       <ProductCard images={Images.receptiondesks} folder="receptiondesks" />

       <h1 className="text-4xl font-bold mb-8 text-primary text-center mt-8">Cafeteria Dining Tables</h1> 
       <ProductCard images={Images.cafetaria} folder="cafetaria" />

       <h1 className="text-4xl font-bold mb-8 text-primary text-center mt-8">Co-working Desks</h1> 
       <ProductCard images={Images.coworkingdesks} folder="coworkingdesks" />

       <h1 className="text-4xl font-bold mb-8 text-primary text-center mt-8">Bathroom Counters</h1> 
       <ProductCard images={Images.bathroomcounters} folder="bathroomcounters" /> */}

      </div>
    </div>
  )
}

export default Industrial
