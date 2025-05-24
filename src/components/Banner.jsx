import React from 'react'
import Slider from './slider'
import Header from './Header'

const Banner = () => {
  return (
    <div className='relative max-w-[2560px] m-auto'>
        <div className='absolute top-0 left-0 z-50 w-full'>
          <Header/>
        </div>
        <Slider/>
        <h1 className='absolute bottom-16 left-6 right-6 md:left-16 md:right-16 lg:bottom-20 lg:left-28 2xl:left-56 text-2xl lg:text-4xl/12 xl:text-5xl/16 font-bold text-white md:w-2/3 lg:w-1/2 xl:w-2/3'>Votre partenaire pour l'excellence industrielle, partout où vous êtes. </h1>
    </div>
  )
}

export default Banner