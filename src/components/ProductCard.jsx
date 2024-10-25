import React from 'react'


const ProductCard = ({ images, folder }) => {

  return (
    <div className="p-4 rounded-lg shadow-lg overflow-hidden">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

        {images.map((image, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
            <div className="relative aspect-square">
              
              <img
                src={image}
                alt={image}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold">
                {image ? image.split('assets/')[1].split('.')[0].replace(/%20/g, ' ').split('-'[0]) : 'Unknown Product'}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductCard
