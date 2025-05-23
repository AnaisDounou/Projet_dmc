import React from 'react'
import Header from '../components/Header'
import { Footer } from '../components/Footer'
import Banner2 from '../components/Banner2'
import { Savoir } from '../components/Savoir'

export const A_Propos = () => {
  return (
    <div>
        {/* <Header/> */}
        <Banner2 img={'./img/banner/CHAINE 1.png'} text={"Une alliance stratégique au service des industrielss"}/>
        <Savoir/>
        <Footer/>
    </div>
  )
}
