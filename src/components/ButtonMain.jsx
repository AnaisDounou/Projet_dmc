import React from 'react'

export const ButtonMain = (props) => {
  return (
    <div>
        <a href={props.link} className='px-8 py-2 inline-block text-[#F49F1E] font-bold border-2 xl:text-lg'>{props.text}</a>
    </div>
  )
}
