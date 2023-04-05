import React from 'react'
import vrHeadset from '../assets/vrHeadset.jpg'
import Gallery from './Gallery'

export default function Part({text1, text2, name}) {
  return (
   <>
    <div className="flex flex-col h-60vh">
        <p className="text-4xl font-bold text-green-950 pl-7 pt-7 uppercase mb-10 ">
          {name}
        </p>
        <div className="px-10 pb-10 flex flex-row h-fit gap-10">
          <p className="w-40% leading-loose">
            {text1}
          </p>
          <img src={vrHeadset} className="w-50%" />
        </div>
        <p className="px-10 leading-loose">
          {text2}
        </p>
      </div>
   </>
  )
}
