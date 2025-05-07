import React from "react";
import { ButtonMain } from "../components/ButtonMain";
import { Link } from "../components/Link";

export const Bienvenue = () => {
  return (
    <section className="max-w-[1800px] m-auto">
      {/* Bienvenue */}
      <div className="m-6 my-16 md:m-16  lg:m-28 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center">
        <div className="flex flex-col gap-8">
          <h2 className="text-[#1C4179] text-3xl lg:text-4xl xl:text-5xl font-bold">
            Bienvenue sur notre site
          </h2>
          <p className="text-justify leading-7 tracking-wide xl:text-xl/10">
            Nous sommes une centrale d’achat spécialisée dans la fourniture
            industrielle, dédiée à l’export vers l’Afrique. Nous adressons les
            besoins de nombreuses industries, et bénéficions d’une expertise
            dans des secteurs exigeants comme ceux des mines et de l’Oil&Gas. 
            Nous proposons bien plus qu’un service classique
            d’approvisionnement.
          </p>
          <ButtonMain text="En savoir plus sur nous" link="#" />
        </div>
        <img src="./img/Bienvenue.png" alt="" className="" />
      </div>

      {/* Misson */}
      <div className="mx-6 md:mx-16 lg:mx-28 flex flex-col gap-6">
        <div className="flex flex-col gap-1">
          <h3 className="text-2xl xl:text-3xl text-[#1C4179] font-extrabold">
            Notre mission
          </h3>
          <p className="text-justify leading-7 tracking-wide xl:text-xl/10">
            Apporter des solutions concrètes, sur-mesure et adaptées à vos
            besoins industriels. Grâce à notre réactivité, notre maîtrise des
            approvisionnements critiques, et notre capacité à gérer les
            commandes spéciales ou les situations d’urgence, nous assurons un
            service fiable et efficace.
          </p>
        </div>

        <div className="flex flex-col gap-1">
          <h3 className="text-2xl xl:text-3xl text-[#1C4179] font-extrabold">
            Notre équipe
          </h3>
          <p className="text-justify leading-7 tracking-wide xl:text-xl/10">
            Est multiculturelle, et possède de nombreuses années d’expériences à
            l’international. Cela confère une vision et une portée globale à nos
            opérations, garantissant une compréhension approfondie des
            différents contextes régionaux et des besoins variés de nos clients.
          </p>
        </div>

        <div className="flex flex-col gap-1">
          <h3 className="text-2xl xl:text-3xl text-[#1C4179] font-extrabold">
            En complément
          </h3>
          <p className="text-justify leading-7 tracking-wide xl:text-xl/10">
            Nous proposons des services de conseils et formations en Achat,
            Approvisionnement, Gestion des stocks et Transport. Ainsi nous
            accompagnons et soutenons nos clients dans l’optimisation de leurs
            flux et process logistiques à travers toutes les étapes de la Supply
            Chain.
          </p>

          <p className="text-justify leading-7 tracking-wide xl:text-xl/10">
            Fort de notre connaissance approfondie des marchés et d’un réseau de
            partenaires solides, nous offrons un accompagnement complet : de
            l’identification de vos besoins à la livraison, en passant par un
            conseil personnalisé pour maximiser la performance de vos
            opérations.
          </p>

          <p className="text-justify leading-7 tracking-wide xl:text-xl/10">
            Découvrez nos <Link link="#" text="produits" /> , &{" "}
            <Link link="#" text="services" /> , et notre engagement à vous
            fournir des solutions adaptées à vos défis industriels.
          </p>
        </div>
      </div>

      {/* Pourquoi */}
      <div className="m-6 my-16 md:m-16 lg:m-28 grid grid-cols-1 md:grid-cols-2 gap-10 xl:gap-20 items-center">
        <img src="./img/pourquoi.png" alt="" />

        <div className="flex flex-col gap-8">
          <h2 className="text-4xl text-[#1C4179] font-extrabold">
            Pourquoi nous choisir ?
          </h2>
          <ul className="list-disc list-inside flex flex-col gap-2 tracking-wide marker:text-[#F49F1E] xl:text-xl/10">
            <li>Fiabilité et respect des délais.</li>
            <li>Solutions sur mesure adaptées à vos besoins.</li>
            <li>Expertise reconnue dans les secteurs critiques.</li>
            <li>Engagement envers la qualité et l’innovation.</li>
            <li>Réactivité et gestion des urgences.</li>
          </ul>
          <ButtonMain text="Découvrir nos services" link="#" />
        </div>
      </div>
    </section>
  );
};
