import React from 'react'
import vrHeadset from '../assets/vrHeadset.jpg'
import Gallery from './Gallery'

export default function Part({text1, text2, name, img}) {
  return (
   <>
    <div className="flex flex-col h-min bg-green-950 justify-around p-16">
        <p className="text-4xl font-bold  text-wite pr-7 pt-7 uppercase mb-10 text-white self-end">
          {name}
        </p>
        <div className="px-10 pb-10 flex flex-row h-fit justify-around">
          <div className="w-750">
            <Gallery />
          </div>
          <div>
            <h3 className="text-white text-2xl font-bold mb-3 leading-loose"></h3>
            <p className=" text-white leading-loose">
            {text1}
            </p>
          </div>
        </div>
        <h3 className="text-white text-2xl font-bold mb-3 px-10"></h3>

        <p className="px-10 text-white leading-loose italic">
        {text2}

        </p>
      </div>
   </>
  )
}
