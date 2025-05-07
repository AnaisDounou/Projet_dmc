import React from 'react'
import Slider from './slider'

const Banner = () => {
  return (
    <div className='relative max-w-[1800px] m-auto'>
        {/* <img src="./img/banner/airplane-8892881_1280.jpg" alt="airplane dmc" className='min-h-[75vh] w-full object-cover object-top brightness-50' /> */}
        <Slider/>
        <div className='absolute bottom-16 left-6 right-6 md:left-16 md:right-16 lg:bottom-20 lg:left-28 text-2xl lg:text-4xl/12 xl:text-5xl/16 font-bold text-white md:w-2/3 lg:w-1/2 xl:w-2/3'>Votre partenaire pour l'excellence industrielle, partout où vous êtes. </div>
    </div>
  )
}

export default Banner