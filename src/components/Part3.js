import React from 'react'

export default function Part3({text1, text2, name}) {
    return (
     <>
      <div className="flex flex-col h-max p-16">
          <p className="text-4xl font-bold text-green-950 pl-7 pt-7 uppercase mb-10 ">
            {name}
          </p>
          <div className="px-10 pb-10 flex flex-row h-fit gap-10 items-center">
            <p className="leading-loose">
              {text1}
            </p>
          </div>
          <p className="px-10 leading-loose">
            {text2}
          </p>
        </div>
     </>
    )
  }
