import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Images from './Images'


const ViewImages = () => {
 
  console.log("bathroomcounters",Images.bathroomcounters)
  return (
 
    <div>
        <h1>View Images</h1>
      
      
        {!Images.bathroomcounters  && <p>No images found</p>}
        {Images.bathroomcounters &&(
        <div className='flex flex-wrap gap-4 justify-center items-center '>
          {Images.bathroomcounters.map((image, index) => (
            <div key={index}>
              <h1> this is the image {image.split("bathroomcounters/")[1].split(".")[0].replace(/%20/g, ' ')}</h1>
            <img src={image} alt={`Image ${index}`} className='w-[300px] h-[300px] shadow-md m-8 rounded-md hover:scale-110' />
            </div>
          ))}
        </div>
        )}
    </div>
  )
}

export default ViewImages