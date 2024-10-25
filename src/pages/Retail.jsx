import React from 'react'
import ProductCard from '../components/ProductCard'
import Images from '../components/Images'

import logo from "../public/images/tombstones/Double Tombstones Beige.jpg"

import DoubleTombstonesBeige from '../public/images/tombstones/Double Tombstones Beige.jpg'
import DoubleTombstonesGrey from '../public/images/tombstones/Double Tombstones Grey.jpg'
import DoubleTombstones from '../public/images/tombstones/Double Tombstones.jpg'
import ForeverTombstone from '../public/images/tombstones/Forever Tombstone.jpg'
import RespectTombstones from '../public/images/tombstones/Respect Tombstones.jpg'
import RoyalTombstone from '../public/images/tombstones/Royal Tombstone.jpg'
import SpecialTombstonesGrey from '../public/images/tombstones/Special Tombstones Grey.jpg'
import SpecialTombstones from '../public/images/tombstones/special tombstones.jpg'
import Tombostone1 from '../public/images/tombstones/Tombostone 1.jpeg'
import Tombstone3 from '../public/images/tombstones/Tombstone 3.jpeg'
import Tombstone4 from '../public/images/tombstones/Tombstone 4.jpeg'
import Tombstone5 from '../public/images/tombstones/Tombstone 5.jpeg'
import Tombstone6 from '../public/images/tombstones/Tombstone 6.jpeg'
import Tombstone from '../public/images/tombstones/tombstone.png'
import Tombstones2 from '../public/images/tombstones/Tombstones 2.jpeg'
import Tombstones from '../public/images/tombstones/Tombstones.jpeg'

const tombstones = [DoubleTombstonesBeige, DoubleTombstonesGrey, DoubleTombstones, ForeverTombstone, RespectTombstones, RoyalTombstone, SpecialTombstonesGrey, SpecialTombstones, Tombostone1, Tombstone3, Tombstone4, Tombstone5, Tombstone6, Tombstone, Tombstones2, Tombstones]


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
        <h1 className="text-3xl font-bold mb-8 text-primary text-center mt-8">Wooden Cupboards and Granite Countertops</h1>
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
        <ProductCard images={Images.tombstones} folder="tombstones" />



      </div>
    </div>
  )
}

export default Retail
