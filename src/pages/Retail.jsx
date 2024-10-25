import React from 'react'
import ProductCard from '../components/ProductCard'
import Images from '../components/Images'

const Retail = () => {
  /** Kitchen Designs(wooden cupboards, granite countertops)
   *Outdoor Braii Area
   *Coffee Tables
   *Benches and tables
   *Tombstones  
   */

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-6xl font-bold mb-8 text-primary text-center">Retail Products</h1>

        <h1 className="text-3xl font-bold mb-8 text-primary text-center mt-8">Kitchen Designs</h1>
        {/* <h1 className="text-3xl font-bold mb-8 text-primary text-center mt-8">Wooden Cupboards and Granite Countertops</h1>
        <ProductCard images={Images.granitekitchens} folder="granitekitchens" />

        <h1 className="text-3xl font-bold mb-8 text-primary text-center mt-8">Outdoor Braii Area</h1>
        <ProductCard images={Images.braai} folder="braai" />
        <h1 className="text-3xl font-bold mb-8 text-primary text-center mt-8">Coffee Tables</h1>
        <ProductCard images={Images.coffeetables} folder="coffeetables" />

        <h1 className="text-3xl font-bold mb-8 text-primary text-center mt-8">Benches and Tables</h1>
        <ProductCard images={Images.benchesandtables} folder="benchesandtables" />

        <h1 className="text-3xl font-bold mb-8 text-primary text-center mt-8">Tombstones</h1>
        <ProductCard images={Images.tombstones} folder="tombstones" />

        <h1 className="text-3xl font-bold mb-8 text-primary text-center mt-8">Tombstones</h1>
        <ProductCard images={Images.tombstones} folder="tombstones" /> */}

        <img src='src/public/images/tombstones/Double Tombstones.jpg'/>


      </div>
    </div>
  )
}

export default Retail
