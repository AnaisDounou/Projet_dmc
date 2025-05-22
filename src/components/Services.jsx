import React from 'react'

export const Services = () => {
  return (
    <section id='#services' className='max-w-[2560px] m-auto'>
        <h2 className='bg-[#1C4179] text-[#F49F1E] text-2xl xl:text-3xl font-black text-center uppercase w-full p-8'>Nos Services</h2>

        <p className='m-6 md:my-12 md:mx-16 lg:mx-28 text-2xl lg:text-3xl font-black text-[#1C4179]'>Notre expertise couvre certains domaines clés pour accompagner votre développement et optimiser vos opérations</p>
        
        <h3 className='mx-6 mt-6 md:mx-16 lg:mx-28 text-xl xl:text-2xl font-bold text-[#1C4179]'>Nos services :</h3>
        <p className='mx-6 md:mx-16 lg:mx-28 text-justify xl:text-lg'>sont conçus pour répondre aux défis spécifiques de vos équipes, que ce soit sur le terrain ou au niveau stratégique. Nous travaillons avec vous pour développer des solutions adaptées à vos besoins et alignées avec vos objectifs opérationnels.</p>

        <div className='m-6 md:my-12 md:mx-16 lg:mx-28'>
            <div className='grid md:grid-cols-2 gap-4'>
                <div className='bg-[#F49F1E] text-white text-center px-6 py-12 flex justify-center items-center flex-col h-full'>
                    <img loading="lazy" className='w-28' src="./img/icons/airplane-plane-flight 1.png" alt="airplane-plane-flight " />
                    <h4 className='text-xl xl:text-2xl font-bold'>Achats et supply chain</h4>
                    <p className='text-base/7 xl:text-lg'>Analyse et amélioration de vos processus pour une gestion efficace des flux logistiques, une réduction des coûts et une optimisation des délais.</p>
                </div>
                <div className='bg-[#F49F1E] text-white text-center px-6 py-12 flex justify-center items-center flex-col h-full'>
                    <img loading="lazy" className='w-28'  src="./img/icons/Business Finance Corporate.png" alt="Business Finance Corporate" />
                    <h4 className='text-xl xl:text-2xl font-bold'>Gestion des stocks et approvisionnements</h4>
                    <p className='text-base/7 xl:text-lg'>Mise en place de solutions sur mesure afin de garantir la disponibilité et la distribution des équipements critiques tout en minimisant les surstocks et les ruptures.</p>
                </div>
            </div>
            <div className='bg-[#F49F1E] text-white text-center px-6 py-12 lg:px-32 lg:py-12 h-fit flex justify-center items-center flex-col mt-4'>
                <img loading="lazy" className='w-28'  src="./img/icons/support 1.png" alt="support 1" />
                <h4 className='text-xl xl:text-2xl font-bold'>Assistance technique sur projets et sur site</h4>
                <p className='text-base/7 xl:text-lg'>Grâce à nos partenariats stratégiques avec des experts dans des secteurs spécialisés tels que le soudage, l’instrumentation et l’électricité industrielle, nous apportons un soutien technique ciblé à vos projets.</p>
            </div>
        </div>
        

        <img loading="lazy" className='my-5' src="./img/produit_bas/Assitance technique 3.png " alt="Assitance technique 3" />

    </section>
  )
}
