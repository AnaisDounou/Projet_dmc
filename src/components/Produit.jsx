import React from 'react'

export const Produit = () => {
  return (
    <section className=''>
        <h2 className='bg-[#1C4179] text-[#F49F1E] text-2xl font-black text-center uppercase w-full p-8'>Nos Produits</h2>
        <p className='m-6 md:my-12 md:mx-16 lg:mx-28 text-3xl font-black text-[#1C4179]'>Nous proposons une gamme de solutions conçues pour répondre aux exigences d’environnements industriels complexes et exigeant.</p>
        
        <h3 className='mt-6 md:mx-16 lg:mx-28 text-xl font-bold text-[#1C4179]'>Equipements et fournitures industrielles :</h3>
        <p className='mx-6 md:mx-16 lg:mx-28 text-justify'>Nous fournissons une vaste sélection d’équipements industriels de haute qualité, adaptés à tous les secteurs d’activité. Que vous opériez dans les secteurs des industries extractives ou de tout autres industries, nos produits répondent aux normes les plus rigoureuses pour assurer la performance de vos opérations et la durabilité de vos installations.</p>

        <div className='mx-6 md:mx-16 lg:mx-28 grid grid-cols-5 items-center'>
           <img className='object-contain h-3/5' src="./img/produit/DISJONCTEURS 1.png" alt="" /> 
           <img className='object-contain h-3/5' src="./img/produit/VANNE GUILLOTINE.png" alt="" /> 
           <img className='object-contain h-3/5' src="./img/produit/EPI COMBI.png" alt="" /> 
           <img className='object-contain h-3/5' src="./img/produit/ADVANCE GEARBOX.png" alt="" /> 
           <img className='object-contain h-2/5' src="./img/produit/MARINE gps.png" alt="" /> 
        </div>

        <div className='text-2xl text-center font-bold text-[#1C4179] m-12'>
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

        <div className='flex flex-wrap gap-8 mx-6 md:mx-16 lg:mx-28 justify-center items-center'>
            <img className='object-contain onject-center h-[80px]' src="./img/logos/ABB 1.png" alt="" /> 
            <img className='object-contain onject-center h-[80px]' src="./img/logos/air torque 1.png" alt="" /> 
            <img className='object-contain onject-center h-[80px]' src="./img/logos/Alfagomma 1.png" alt="" /> 
            <img className='object-contain onject-center h-[80px]' src="./img/logos/Atlas Copco 1.png" alt="" /> 
            <img className='object-contain onject-center h-[80px]' src="./img/logos/Babcock Wanson 1.png" alt="" /> 
            <img className='object-contain onject-center h-[80px]' src="./img/logos/Bauer 1.png" alt="" /> 
            <img className='object-contain onject-center h-[80px]' src="./img/logos/Bene Inox 1.png" alt="" /> 
            <img className='object-contain onject-center h-[80px]' src="./img/logos/Benkan 1.png" alt="" /> 
            <img className='object-contain onject-center h-[80px]' src="./img/logos/Bray 1.png" alt="" /> 
            <img className='object-contain onject-center h-[80px]' src="./img/logos/Bvalve 1.png" alt="" /> 
            <img className='object-contain onject-center h-[80px]' src="./img/logos/Demag 1.png" alt="" /> 
            <img className='object-contain onject-center h-[80px]' src="./img/logos/Dupont 1.png" alt="" /> 
            <img className='object-contain onject-center h-[80px]' src="./img/logos/Castolin 1.png" alt="" /> 
            <img className='object-contain onject-center h-[80px]' src="./img/logos/Caterpillar 1.png" alt="" /> 
            <img className='object-contain onject-center h-[80px]' src="./img/logos/Chockfast 1.png" alt="" /> 
        </div>


        <div className='bg-[#1C4179] text-white max-w-[800px] m-auto my-16 mt-32 px-12 py-6 shadow-[-40px_-40px_#F49F1E]'>
            <h3 className='text-xl font-bold'>Notre Objectif</h3>
            <p className='text-base/7'>est de vous offrir un service fluide et réactif, adapté à vos contraintes et à la complexité de vos projets. Avec DMC CONSULTING vous pouvez compter sur une gestion rigoureuse et une parfaite maîtrise des processus pour sécuriser vos approvisionnements industriels.</p>
        </div>

        
        <img src="./img/produit_bas/26.png " alt="" />

        <div>
            <h3 className='mt-6 md:mx-16 lg:mx-28 text-xl font-bold text-[#1C4179]'>Gestion de projets et commandes spéciales</h3>
            <p className='mx-6 md:mx-16 lg:mx-28 text-justify'></p>
            Nous sommes votre partenaire privilégié pour assurer la fourniture des équipements essentiels à la réussite de vos projets d'envergure. Grâce à notre expertise approfondie, nous vous accompagnons dans :
            <ul className='mx-6 md:mx-16 lg:mx-28 text-justify'>
                <li>La planification des expéditions, pour garantir une livraison conforme à vos exigences opérationnelles.
                </li>
                <li>La coordination logistique, en travaillant avec des partenaires fiables pour optimiser chaque étape de la chaîne d’approvisionnement.</li>
                <li>Le respect des délais, afin de minimiser les interruptions et d’assurer une continuité dans vos activités.</li>
            </ul>
        </div>

        <img src="./img/produit_bas/ACIERS 1.png " alt="" />
        <img src="./img/produit_bas/INSTRUM 2 1.png " alt="" />
        <img src="./img/produit_bas/INSTRUM 3 1.png " alt="" />
        <img src="./img/produit_bas/PI7CES DETACHEES.png" alt="" />

        <img src="./img/produit_bas/Assitance technique 3.png " alt="" />
        
    </section>
  )
}
