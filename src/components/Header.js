import React from 'react'
import logo from '../assets/logo.png'

export default function Header() {
  return (
    <div className='flex flex-row w-screen bg-green-950 p-3'>
    <img src={logo} className="aspect-square h-9 "/>
    <p className='font-xl'>sqdqsd</p>
    </div>
  )
}
