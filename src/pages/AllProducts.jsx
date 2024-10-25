import React, { useState } from 'react'
import ProductCard from '../components/ProductCard'
import Images from '../components/Images'
const AllProducts = () => {
  const allProducts = [Images.bathroomcounters, Images.coffeetables, Images.tombstones, Images.cafetaria, Images.coworkingdesks, Images.benchesandtables, Images.bathroomcounters, Images.receptiondesks, Images.granitekitchens, Images.braai]
  const folder = ['bathroomcounters', 'coffeetables', 'tombstones', 'cafetaria', 'coworkingdesks', 'benchesandtables', 'bathroomcounters', 'receptiondesks', 'granitekitchens', 'braai']

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-primary text-center">All Products</h1>

        <div className="">
          {/* {allProducts.map((product,index) => (
            <div key={index} className="bg-white ">
              <ProductCard images={product} folder={folder[index]} />
            </div>
          ))} */}
        </div>
      </div>
    </div>
  )
}

export default AllProducts
