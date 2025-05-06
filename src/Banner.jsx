import React from 'react'

const Banner = () => {
  return (
    <div className='relative'>
        <img src="../public/img/banner/airplane-8892881_1280.png" alt="airplane dmc" className='h-[90vh] w-full object-cover object-top brightness-50' />
        <div className='absolute bottom-8 left-6 lg:bottom-16 lg:left-28 text-2xl lg:text-4xl/12 font-bold text-white lg:w-1/2'>Votre partenaire pour l'excellence industrielle, partout où vous êtes. </div>
    </div>
  )
}

export default Banner