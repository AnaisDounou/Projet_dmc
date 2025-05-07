import React from 'react'

export const Footer = () => {
  return (
    <footer className='max-w-[1440px] m-auto bg-[#1C4179] p-6 md:px-16 lg:px-28 lg:py-8 grid grid-cols-1 lg:grid-cols-3 justify-center gap-6 lg:gap-16'>
        <div>
            <img src="./img/logo_dmc.png" alt="DMC logo" className='p-6 md:px-46 lg:p-6'/>
            <p className='text-[15px] text-center text-white'>“Votre besoin. Notre solution. Votre réussite”</p>
        </div>
        <div className='col-span-2'>

        <div className='grid grid-cols-2 md:grid-cols-3 text-white '>
            <div>
                <span className='text-xl font-bold block mb-3'>Information</span>
                <ul className='flex flex-col gap-1'>
                    <li>Accueil</li>
                    <li>Produits</li>
                    <li>Services</li>
                    <li>Secteurs</li>
                    <li>A propos</li>
                </ul>
            </div>
            
            <div>
                <span className='text-xl font-bold block mb-3'>Secteurs</span>
                <ul className='flex flex-col gap-1'>
                    <li>Oil & Gas </li>
                    <li>Mines & carrières</li>
                    <li>Marine</li>
                    <li>Divers Industries</li>
                </ul>
            </div>
            
            <div className='col-span-2 md:col-span-1 mt-4 md:mt-0'>
                <span className='text-xl font-bold block mb-3'>Contacts</span>
                <ul className='flex flex-col gap-1'>
                    <li className='break-keep'>+33 (0)7 88 31 43 80</li>
                    <li>contact@dmcconsulting.net</li>
                </ul>
                
                <span className='text-xl font-bold block mb-3 mt-5'>Adresse</span>
                <ul className='flex flex-col gap-1'>
                    <li>15 Rue Malher 75004 Paris</li>
                </ul>
            </div>
        </div>
        
        <br />
        <hr className='border border-white'/>
        <br />
        <span className='text-center text-white text-sm uppercase block'>©2025 COPYRIGHT DMC CONSULTING — Tous droits réservés</span>
        
        </div>
        
    </footer>
  )
}
