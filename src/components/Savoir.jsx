import React from 'react'

export const Savoir = () => {
  return (
    <div>
        <h2 className='bg-[#1C4179] text-[#F49F1E] text-2xl xl:text-3xl font-black text-center uppercase w-full p-8 lg:p-12'>SYNERGIE DES SAVOIR-FAIRE</h2>
        
        <h3 className='mx-6 mt-6 md:mt-12 md:mx-16 lg:mx-28 text-xl xl:text-2xl font-bold text-[#1C4179]'>DMC CONSULTING :</h3>
        <p className='mx-6 md:mx-16 lg:mx-28 text-justify xl:text-lg'>Fruit d’une vision commune et ambitieuse : celle d’unir des expertises complémentaires pour répondre aux besoins variés et complexes des industriels, en leur proposant des solutions fiables, innovantes et sur mesure. Fondée par l’association de trois entités aux parcours solides et aux ressources stratégiques, DMC CONSULTING se distingue par sa polyvalence, son agilité et sa capacité à opérer dans des environnements diversifiés.</p>
        
        <div className='m-6 md:mx-16 lg:mx-56 flex flex-col gap-8 xl:text-lg'>
            <div className='grid md:grid-cols-3 gap-4 items-center'>
                <img className='w-52 m-auto' src="./img/savoir_faire/image 2.png" alt="" />
                <p className='md:col-span-2 text-justify'>
                    Acteur clé dans le domaine des centrales d’achat généralistes, STC CONSULTING intervient principalement sur le continent africain, avec une forte présence au Cameroun. Forte de son expertise en gestion des approvisionnements et en optimisation des achats, cette entité contribue à garantir l’efficacité et la compétitivité des solutions proposées.
                </p>
            </div>

            <div className='grid md:grid-cols-3 gap-4 items-center'>
                <img className='w-52 m-auto' src="./img/savoir_faire/Frame 128.png " alt="" />
                <p className='md:col-span-2 text-justify'>
                    Spécialiste reconnu dans le conseil en Supply Chain, la gestion d’entrepôts logistiques et la mise à disposition de personnel qualifié, CVR GROUP joue un rôle essentiel dans l’optimisation des flux et des opérations. Son savoir-faire garantit une maîtrise rigoureuse des processus logistiques et une capacité à répondre aux besoins spécifiques des clients dans des délais compétitifs.
                </p>
            </div>
        
            <div className='grid md:grid-cols-3 gap-4 items-center'>
                <img className='w-52 m-auto' src="./img/savoir_faire/DLBH (2) 1.png " alt="" />
                <p className='md:col-span-2 text-justify'>
                    Cette entité s’appuie sur l’expertise internationale de son fondateur, qui apporte une compréhension approfondie des marchés cibles et des industries stratégiques. Sa connaissance fine des contextes locaux et globaux permet à DMC CONSULTING de développer des solutions parfaitement adaptées aux spécificités et aux enjeux des différents secteurs industriels.
                </p>
            </div>
        </div>
        
        <p className='mx-6 my-12 md:mx-16 lg:mx-28 text-justify md:text-center xl:text-lg'>Cette union de forces et de compétences fait de DMC CONSULTING une entreprise unique, capable d’intervenir efficacement sur des projets variés, en combinant rigueur, innovation et pragmatisme. Nos équipes, animées par un esprit de collaboration et un engagement sans faille, se tiennent aux côtés de nos clients pour les accompagner dans leurs défis opérationnels et stratégiques.</p>

        <img src="./img/savoir_faire/2-2 1.png " alt="" />

        <p className='m-6 md:my-16 md:mx-16 lg:mx-28 text-xl lg:text-3xl font-black text-[#1C4179] text-center'>Avec DMC CONSULTING, vous bénéficiez d’un partenaire de confiance, fort d’une vision globale et d’une capacité d’exécution locale, pour construire des solutions pérennes et créatrices de valeur dans un environnement industriel en constante évolution.</p>

        <h2 className='bg-[#1C4179] text-[#F49F1E] text-2xl xl:text-3xl font-black text-center uppercase w-full p-8 lg:p-12'>NOS ENGAGEMENTS</h2>
        <div style={{
            backgroundImage: 'url("./img/savoir_faire/pipeline-8838496_1280 2.png")',
            backgroundSize: 'cover', // optional
            backgroundPosition: 'center', // optional
        }}
        className="w-full p-8">
            <img className='md:h-[96vh] w-full m-auto my-2 object-contain ' src="./img/savoir_faire/Group 11.png" alt="" />
        </div>
    </div>
  )
}
