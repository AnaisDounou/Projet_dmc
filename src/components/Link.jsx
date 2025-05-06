import React from 'react'

export const Link = (props) => {
  return (
    <a href={props.link} className='underline text-[#F49F1E]'>{props.text}</a>
  )
}
