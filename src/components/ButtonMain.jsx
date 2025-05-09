import React from 'react'
import { Link } from 'react-router-dom'

export const ButtonMain = (props) => {
  return (
    <div>
        <Link to={props.link} className='px-8 py-2 inline-block text-[#F49F1E] font-bold border-2 xl:text-lg'>{props.text}</Link>
    </div>
  )
}
