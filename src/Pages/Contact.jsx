import React from 'react'
import Header from '../components/Header'
import { Footer } from '../components/Footer'
import Banner2 from '../components/Banner2'
import { ContactInfo } from '../components/ContactInfo'

export const Contact = () => {
  return (
    <div>
        {/* <Header/> */}
        <Banner2 img={'./img/banner/industry-2023592_960.png'} text={"Vous avez une question ou besoin d’un conseil?"}/>
        <ContactInfo/>
        <Footer/>
    </div>
  )
}
