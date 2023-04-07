import React from 'react'
import vrHeadset from '../assets/vrHeadset.jpg'
import screen1 from '../assets/screen1.PNG'
import screen2 from '../assets/screen2.PNG'
import screen3 from '../assets/screen3.PNG'
import screen5 from '../assets/screen5.PNG'


export default function Gallery() {
  return (
    <div className='flex flex-row flex-wrap gap-2 w-750'>
        <img src={screen3} className='h-48 w-341'/>
        <img src={screen1} className='h-48 w-341'/>
        <img src={screen2} className='h-48 w-341'/>
        <img src={screen5} className='h-48 w-341'/>
    </div>
  )
}
