import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const modalData = {
  oil: {
    title: "Oil & Gas",
    img: "./img/Secteurs/pipeline-8838495_1280 2.png",
    items: [
      "Air comprimé",
      "Pompes ",
      "Vannes, raccords & robinetterie",
      "Equipements et matériels de forage",
      "Levage manutention",
      "Détection de gaz",
      "Matériaux ignifuges et ATEX",
      "Graisses, lubrifiants , scellements",
      "Câbles électriques industriels",
      "Outillage ATEX",
    ]
  },
  mines : {
    title: "Mines & Carrières",
    img: "./img/Secteurs/Remplacement - SECTEURS - Photo Mines et carrieres 1.png",
    items: [
      "Détecteurs de gaz",
      "Lampes et systèmes d’éclairage (bâtiments, véhicules), projecteurs,",
      "Courroies, roulements, engrenages",
      "Pièces pour engins lourds",
      "Huiles et lubrifiants",
      "Convoyeurs à bande et systèmes de manutention",
      "Moteurs,  réducteurs, motoréducteurs",
      "Câbles électriques industriels",
      "Réactifs",
    ]
  },
  marine: {
    title: "Marine",
    img: "./img/Secteurs/shipping-4663266_1280 2.png",
    items: [
        "Équipements de navigation (radars, GPS)",
        "Gilets de sauvetage et radeaux de survie",
        "Systèmes anti-incendie (extincteurs, systèmes à mousse)",
        "Systèmes de détection et d’alerte (gaz, incendies)",
        "Éclairages marins certifiés",
        "Pièces pour moteurs et générateurs marins",
        "Produits anti-corrosion",
        "Pièces pour systèmes hydrauliques (pompes, tuyaux)",
        "Lubrifiants et graisses pour environnement marin",
        "Cordage/Chaîne",
    ]
  },
}



export const Secteur_Activiter = (props) => {

  const [openModal, setOpenModal] = useState(null)
  
    const handleOpen = (key) => {
      setOpenModal(key)
    }
  
    const handleClose = () => {
      setOpenModal(null)
    }

  return (
    <div>
        <div  onClick={() => handleOpen(props.link)} className=' bg-[#1C4179]'>
            <div className='p-4 md:p-8 flex flex-col gap-2 justify-center items-center'>
                <h2 className='text-[#F49F1E] text-2xl xl:text-3xl font-black text-center uppercase w-full'>{props.title}</h2>
                <Link onClick={() => handleOpen('construction')} className='px-6 py-2 inline-block text-[#F49F1E] duration-75 hover:text-white font-bold border-2 text-sm xl:text-lg'>Plus de détails</Link>
            </div>
            <img loading="lazy" className='h-[70vh] object-cover object-center md:h-auto' src={props.img} alt={props.img} />
        </div>



        {/* Modal  style={{ backgroundImage: 'url(${modalData[openModal].img})', backgroundSize: 'cover', backgroundPosition: 'center',}}*/}
      {openModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.8)] bg-opacity-50 flex items-center justify-center z-50">
          <div className="lg:py-20 w-full lg:w-3/5 h-full lg:h-4/5">
            <img loading="lazy" src={modalData[openModal].img} alt={modalData[openModal].img} className='object-cover w-11/12 h-[90vh] md:w-[80%] md:h-[90vh] absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]' />
            <div className="bg-[rgba(225,225,225,0.8)] w-10/12 md:max-w-[550px] lg:max-w-[700px] xl:max-w-[900px] mx-auto p-6 shadow-xl absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
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
