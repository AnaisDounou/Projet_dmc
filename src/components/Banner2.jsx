import React from 'react'

const Banner2 = (props) => {
  return (
    <div className='relative max-w-[1800px] m-auto'>
        <img src={props.img} alt="airplane dmc" className='h-[75vh] lg:h-[90vh] 2xl:h-[70vh] w-full object-cover object-top brightness-60' />
        <h1 className='absolute top-24 lg:top-28 left-1/2 text-xl lg:text-3xl font-bold text-white -translate-1/2 min-w-[270px]'>{props.text}</h1>
    </div>
  )
}

export default Banner2