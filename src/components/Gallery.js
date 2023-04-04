import React from 'react'
import vrHeadset from '../assets/vrHeadset.jpg'


export default function Gallery() {
  return (
    <div className='flex flex-row flex-wrap gap-2 w-500'>
        <img src={vrHeadset} className='h-32'/>
        <img src={vrHeadset} className='h-32'/>
        <img src={vrHeadset} className='h-32'/>
        <img src={vrHeadset} className='h-32'/>
    </div>
  )
}
