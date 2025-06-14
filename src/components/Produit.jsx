import React from 'react'
import { ImgScroll } from './ImgScroll'
import { LogoScroll } from './LogoScroll'

export const Produit = () => {
  return (
    <section id='produit' className='max-w-[2560px] m-auto'>
        <h2 className='bg-[#1C4179] text-[#F49F1E] text-2xl xl:text-3xl font-black text-center uppercase w-full p-8 lg:p-12 2xl:p-18'>Nos Produits</h2>
        <p className='m-6 md:my-12 md:mx-16 lg:mx-28 2xl:mx-56 text-2xl lg:text-3xl font-black text-[#1C4179]'>Nous proposons une gamme de solutions conçues pour répondre aux exigences d’environnements industriels complexes et exigeant.</p>
        
        <h3 className='mx-6 mt-6 md:mx-16 lg:mx-28 2xl:mx-56 text-xl xl:text-2xl font-bold text-[#1C4179]'>Equipements et fournitures industrielles :</h3>
        <p className='mx-6 md:mx-16 lg:mx-28 2xl:mx-56 text-justify xl:text-lg'>Nous fournissons une vaste sélection d’équipements industriels de haute qualité, adaptés à tous les secteurs d’activité. Que vous opériez dans les secteurs des industries extractives ou de tout autres industries, nos produits répondent aux normes les plus rigoureuses pour assurer la performance de vos opérations et la durabilité de vos installations.</p>


        <div className="mt-16">
            <ImgScroll/>
        </div>

        <div className='text-xl md:text-2xl xl:text-3xl text-center font-bold text-[#1C4179] m-6 md:m-12'>
            Aciers / Inox / Raccorderie <br />
            Robinetterie industrielle <br />
            Instrumentation <br />
            Sécurité (EPI, incendie, détection de gaz...) <br />
            Electricité industrielle <br />
            Machine et matériel lourd, pièces détachées <br />
            Forage, reconditionnement et réparation <br />
            Equipements et accessoires “Marine” <br />
            Outillage <br />
            Autres...
        </div>

        <div className="mt-16">
            <LogoScroll/>
        </div>


        <div className='bg-[#1C4179] text-white max-w-5/6 sm:max-w-[500px] lg:max-w-[800px] xl:max-w-[900px] m-auto mt-12 md:mt-32 px-6 py-4 md:px-12 md:py-6 shadow-[-12px_-12px_#F49F1E] md:shadow-[-20px_-20px_#F49F1E] lg:shadow-[-40px_-40px_#F49F1E]'>
            <h3 className='text-xl xl:text-3xl font-bold'>Notre Objectif</h3>
            <p className='text-base/7 xl:text-lg/9 text-justify'>est de vous offrir un service fluide et réactif, adapté à vos contraintes et à la complexité de vos projets. Avec DMC CONSULTING vous pouvez compter sur une gestion rigoureuse et une parfaite maîtrise des processus pour sécuriser vos approvisionnements industriels.</p>
        </div>

        
        <img className='lg:h-[100vh] w-full object-cover mt-6 md:mt-12 lg:mt-20' loading="lazy" src="./img/produit_bas/26.png " alt="Industry inside" />

        <div className='my-12'>
            <h3 className=' mx-6 mt-6 md:mx-16 lg:mx-28 2xl:mx-56 text-xl xl:text-3xl font-bold text-[#1C4179]'>Gestion de projets et commandes spéciales</h3>
            <p className='mx-6 md:mx-16 lg:mx-28 2xl:mx-56 text-justify xl:text-lg'>
            Nous sommes votre partenaire privilégié pour assurer la fourniture des équipements essentiels à la réussite de vos projets d'envergure. Grâce à notre expertise approfondie, nous vous accompagnons dans :
            </p>
            <ul className='mx-6 md:mx-16 lg:mx-28 2xl:mx-56 text-justify list-disc list-inside px-2 md:px-8 xl:text-lg'>
                <li>La planification des expéditions, pour garantir une livraison conforme à vos exigences opérationnelles.
                </li>
                <li>La coordination logistique, en travaillant avec des partenaires fiables pour optimiser chaque étape de la chaîne d’approvisionnement.</li>
                <li>Le respect des délais, afin de minimiser les interruptions et d’assurer une continuité dans vos activités.</li>
            </ul>
        </div>

        <div className='grid grid-cols-2 md:grid-cols-4 gap-2 mx-6 md:mx-16 lg:mx-28 2xl:mx-56'>
            <img loading="lazy" className='w-full h-full object-cover' src="./img/produit_bas/ACIERS 1.png " alt="ACIERS 1.png " />
            <img loading="lazy" className='w-full h-full object-cover' src="./img/produit_bas/INSTRUM 2 1.png " alt="INSTRUM 2 1.png " />
            <img loading="lazy" className='w-full h-full object-cover' src="./img/produit_bas/INSTRUM 3 1.png " alt="INSTRUM 3 1.png " />
            <img loading="lazy" className='w-full h-full object-cover' src="./img/produit_bas/PI7CES DETACHEES.png" alt="PI7CES DETACHEES.png" />
        </div>

        <div className='my-12'>
            <img loading="lazy" className='w-32 md:w-[250px] m-auto mb-4' src="public/img/icons/EMERGENCY BIS 3.png" alt="" />
            <p className='mx-6 md:mx-16 lg:mx-28 2xl:mx-56 text-center xl:text-lg'>Nos équipes sont formées pour réagir rapidement à vos besoins urgents. De l'identification de la solution au déploiement, nous mettons tout en œuvre pour répondre aux urgences et minimiser les interruptions de vos activités</p>
        </div>
        
    </section>
  )
}
