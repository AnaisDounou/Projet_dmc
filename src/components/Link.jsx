import React from 'react'

export const Link = (props) => {
  return (
    <a href={props.link} className='underline text-[#F49F1E] hover:text-[#1C4179] duration-75'>{props.text}</a>
  )
}
