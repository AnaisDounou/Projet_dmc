import React, { useState } from 'react'
import Banner2 from '../components/Banner2'
import Header from '../components/Header'
import { Secteur_Activiter } from '../components/Secteur_Activiter'
import { Footer } from '../components/Footer'
import { Link } from 'react-router-dom'

const modalData = {
  agro: {
    title: "Industrie agro-alimentaire",
    img: "./img/Secteurs/51 1.png",
    items: [
      "Pompes pour fluides variés",
      "Générateurs et groupes électrogènes",
      "Robinetterie industrielle",
      "EPI",
      "Lubrifiants et produits certifiés pour contact alimentaires",
      "Produits de nettoyage industriel",
      "Pièces pour matériel industriel & engins",
      "Outillage",
    ]
  },
  forest: {
    title: "Industrie forestière",
    img: "./img/Secteurs/pexels-photo-12278580 1.png",
    items: [
      "Matériels de coupe et d’abattage",
      "Pièces pour matériels & engins",
      "Chaînes et accessoires",
      "Lubrifiants et huiles spécifiques pour équipements forestiers",
      "Produits de traitement et de préservation du bois",
      "Outillage pour l’entretien des lames et chaînes de scie",
      "Éclairages et signalisation pour zones forestières",
      "Fixations et attaches pour transport du bois",
    ]
  },
  construction: {
    title: "Construction",
    img: "./img/Secteurs/pexels-kawserhamid-176342.png",
    items: [
      "Matériaux de construction",
      "Aciers, aciers spéciaux",
      "Soudage et découpe",
      "Systèmes de fixation",
      "Équipements de levage et de manutention",
      "Signalisation et sécurité sur chantier",
      "Systèmes de coffrage et d’échafaudage",
      "Graisses et lubrifiants",
      "Pièces pour matériels et engins",
      "Compresseurs et systèmes pneumatiques"
    ]
  },
}



export const Secteurs = () => {
  const [openModal, setOpenModal] = useState(null)

  const handleOpen = (key) => {
    setOpenModal(key)
  }

  const handleClose = () => {
    setOpenModal(null)
  }

  return (
    <div>
      <Header />
      <Banner2 img={'./img/banner/large-truck-carrying-sand-platinum-mining.png'} text={"Une couverture globale, des solutions multisectorielles"} />

      <section className='max-w-[1800px] m-auto'>
        <div className='m-6 md:m-16 lg:mx-28 lg:my-20 flex flex-col gap-6 md:gap-20'>
          <Secteur_Activiter onClick={() => handleOpen('oil')} title="OIL & GAS" link="oil" img="./img/Secteurs/pipeline-8838495_1280 2.png" />
          <Secteur_Activiter title="MINES & CARRIERES" link="mines" img="./img/Secteurs/Remplacement - SECTEURS - Photo Mines et carrieres 1.png" />
          <Secteur_Activiter title="MARINE" link="marine" img="./img/Secteurs/shipping-4663266_1280 2.png" />

          <div className='bg-[#1C4179]'>
            <h2 className='text-[#F49F1E] text-2xl xl:text-3xl font-black text-center uppercase w-full my-6'>AUTRES INDUSTRIES</h2>
            <div className='grid md:grid-cols-3 gap-8 md:gap-0'>
              {/* AGRO */}
              <div className='cursor-pointer flex flex-col gap-2 justify-center items-center'>
                <h3 className='text-[#F49F1E] text-lg xl:text-xl text-center w-full'>Agro-alimentaire</h3>
                <Link onClick={() => handleOpen('agro')} to="#" className='px-6 py-2 inline-block text-[#F49F1E] font-bold border-2 xl:text-lg duration-75 hover:text-white'>Plus de détails</Link>
                <img className='h-full' src="./img/Secteurs/51 1.png" alt="" />
              </div>

              {/* FOREST */}
              <div className='cursor-pointer flex flex-col gap-2 justify-center items-center'>
                <h3 className='text-[#F49F1E] text-lg xl:text-xl text-center w-full'>Forestière</h3>
                <Link onClick={() => handleOpen('forest')} to="#" className='px-6 py-2 inline-block text-[#F49F1E] font-bold border-2 xl:text-lg duration-75 hover:text-white'>Plus de détails</Link>
                <img className='h-full' src="./img/Secteurs/pexels-photo-12278580 1.png" alt="" />
              </div>

              {/* CONSTRUCTION */}
              <div className='cursor-pointer flex flex-col gap-2 justify-center items-center'>
                <h3 className='text-[#F49F1E] text-lg xl:text-xl text-center w-full'>Construction</h3>
                <Link onClick={() => handleOpen('construction')} to="#" className='px-6 py-2 inline-block text-[#F49F1E] font-bold border-2 xl:text-lg duration-75 hover:text-white'>Plus de détails</Link>
                <img className='h-full' src="./img/Secteurs/pexels-kawserhamid-176342.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Modal  style={{ backgroundImage: 'url(${modalData[openModal].img})', backgroundSize: 'cover', backgroundPosition: 'center',}}*/}
      {openModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.8)] bg-opacity-50 flex items-center justify-center z-50">
          <div className="lg:py-20 w-full lg:w-3/5 h-full lg:h-4/5 relative">
            <img src={modalData[openModal].img} alt={modalData[openModal].img} className='object-cover lg:w-[60%] lg:h-[80%] relative top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]' />
            <div className="bg-[rgba(225,225,225,0.8)] w-fit mx-auto p-6 shadow-xl absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
              <button onClick={handleClose} className="absolute top-2 right-6 text-[#1C4179] text-4xl font-semibold">&times;</button>
              <h2 className="text-xl font-bold mb-4 text-[#1C4179]">{modalData[openModal].title}</h2>
              <ul className="list-disc list-inside space-y-1 text-[#1C4179] font-bold lg:text-xl">
                {modalData[openModal].items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
