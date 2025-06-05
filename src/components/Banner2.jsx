import React from 'react'
import Header from './Header'

const Banner2 = (props) => {
  return (
    <div className='relative max-w-[2560px] m-auto'>
        <div className='absolute top-0 left-0 z-50 w-full'>
          <Header/>
        </div>
        <img src={props.img} alt="airplane dmc" className='h-[75vh] lg:h-[100vh] w-full object-cover object-center brightness-60' />
        <h1 className='absolute top-30 lg:top-48 2xl:top-56 left-1/2 text-xl lg:text-3xl 2xl:text-5xl font-bold text-white -translate-1/2 min-w-[270px]'>{props.text}</h1>
    </div>
  )
}

export default Banner2