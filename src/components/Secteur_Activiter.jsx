import React from 'react'
import { Link } from 'react-router-dom'

export const Secteur_Activiter = (props) => {
  return (
    <div>
        <div className=' bg-[#1C4179]'>
            <div className='p-4 md:p-8 flex flex-col gap-2 justify-center items-center'>
                <h2 className='text-[#F49F1E] text-2xl xl:text-3xl font-black text-center uppercase w-full'>{props.title}</h2>
                <Link to={props.link} className='px-6 py-2 inline-block text-[#F49F1E] font-bold border-2 text-sm xl:text-lg'>Plus de détails</Link>
            </div>
            <img className='h-[70vh] object-cover object-center md:h-auto' src={props.img} alt={props.img} />
        </div>
    </div>
  )
}
