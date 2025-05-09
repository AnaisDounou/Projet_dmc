import React from 'react'
import Banner2 from '../components/Banner2'
import Header from '../components/Header'
import {Secteur_Activiter} from '../components/Secteur_Activiter'
import { Footer } from '../components/Footer'
import { Link } from 'react-router-dom'


export const Secteurs = () => {
  return (
    <div>
        <Header/>
        <Banner2 img={'./img/banner/large-truck-carrying-sand-platinum-mining.png'} text={"Une couverture globale, des solutions multisectorielles"}/>

        <section className='max-w-[1800px] m-auto'>
          <div className='m-6 md:m-16 lg:mx-28 lg:my-20 2xl:mx-0 flex flex-col gap-6 md:gap-20'>
            <Secteur_Activiter title="OIL & GAS" link="/" img="./img/Secteurs/pipeline-8838495_1280 2.png"/> 
            <Secteur_Activiter title="MINES & CARRIERES" link="/" img="./img/Secteurs/Remplacement - SECTEURS - Photo Mines et carrieres 1.png"/> 
            <Secteur_Activiter title="MARINE" link="/" img="./img/Secteurs/shipping-4663266_1280 2.png"/> 
            
            <div className=' bg-[#1C4179]'>
                <h2 className='text-[#F49F1E] text-2xl xl:text-3xl font-black text-center uppercase w-full my-6'>AUTRES INDUSTRIES</h2>
              <div className='grid md:grid-cols-3 gap-8 md:gap-0'>
                <div className='flex flex-col gap-2 justify-center items-center'>
                  <h3 className='text-[#F49F1E] text-lg xl:text-xl text-center w-full'>Agro-alimentaire</h3>
                  <Link to="/" className='px-6 py-2 inline-block text-[#F49F1E] font-bold border-2 xl:text-lg'>Plus de détails</Link>
                  <img className='h-full' src="./img/Secteurs/51 1.png" alt="" /> 
                </div>
                <div className='flex flex-col gap-2 justify-center items-center'>
                  <h3 className='text-[#F49F1E] text-lg xl:text-xl text-center w-full'>Forestière</h3>
                  <Link to="/" className='px-6 py-2 inline-block text-[#F49F1E] font-bold border-2 xl:text-lg'>Plus de détails</Link>
                  <img className='h-full' src="./img/Secteurs/pexels-photo-12278580 1.png" alt="" /> 
                </div>
                <div className='flex flex-col gap-2 justify-center items-center'>
                  <h3 className='text-[#F49F1E] text-lg xl:text-xl text-center w-full'>Construction</h3>
                  <Link to="/" className='px-6 py-2 inline-block text-[#F49F1E] font-bold border-2 xl:text-lg'>Plus de détails</Link> 
                  <img className='h-full' src="./img/Secteurs/pexels-kawserhamid-176342.png" alt="" />
                </div>
              </div>
            </div>

          </div>
        </section>

        
        {/*  
         
         
         */}
        <Footer/>
    </div>
  )
}
