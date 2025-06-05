import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const Footer = () => {

   const location = useLocation();

    useEffect(() => {
        if (location.hash) {
        const el = document.querySelector(location.hash);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
        }
    }, [location]); 

  return (
    <footer className="max-w-[2560px] m-auto bg-[#1C4179] p-6 md:px-16 lg:px-28 2xl:px-56 lg:py-8 grid grid-cols-1 lg:grid-cols-3 justify-center gap-6 lg:gap-16">
      <div>
        <a href="/">
          <img loading="lazy"
            src="./img/logo_dmc.png"
            alt="DMC logo"
            className="p-6 md:px-46 lg:p-6"
          />
        </a>
        <p className="text-[15px] text-center text-white">
          “Votre besoin. Notre solution. Votre réussite”
        </p>
      </div>
      <div className="col-span-2">
        <div className="grid grid-cols-2 md:grid-cols-3 text-white ">
          <div>
            <span className="text-xl font-bold block mb-3">Information</span>
            <ul className="flex flex-col gap-1">
              <li className="hover:underline">
                <Link to="/"> Accueil </Link>
              </li>
              <li className="hover:underline">
                <Link to="/solutions#produit"> Produits </Link>
              </li>
              <li className="hover:underline">
                <Link to="/solutions#services"> Services </Link>
              </li>
              <li className="hover:underline">
                <Link to="/secteurs"> Secteurs </Link>
              </li>
              <li className="hover:underline">
                <Link to="/a_propos"> A propos </Link>
              </li>
            </ul>
          </div>

          <div>
            <span className="text-xl font-bold block mb-3">Secteurs</span>
            <ul className="flex flex-col gap-1">
              <li className="hover:underline"><Link to="/secteurs#oil-gas">Oil & Gas </Link></li>
              <li className="hover:underline"><Link to="/secteurs#mines-carrieres">Mines & carrières</Link></li>
              <li className="hover:underline"><Link to="/secteurs#marine">Marine</Link></li>
              <li className="hover:underline"><Link to="/secteurs#divers">Autres Industries</Link></li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1 mt-4 md:mt-0">
            <span className="text-xl font-bold block mb-3">Contacts</span>
            <ul className="flex flex-col gap-1">
              <li className="break-keep">
                <a
                  href="tel:+33788314380"
                  className="hover:underline text-white"
                >
                  +33 (0)7 88 31 43 80
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@dmcconsulting.net"
                  className="hover:underline text-white"
                >
                  contact@dmcconsulting.net
                </a>
              </li>
            </ul>

            <span className="text-xl font-bold block mb-3 mt-5">Adresse</span>
            <ul className="flex flex-col gap-1">
              <li>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=15+Rue+Malher+75004+Paris"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-white"
                >
                  15 Rue Malher 75004 Paris
                </a>
              </li>
            </ul>
          </div>
        </div>

        <br />
        <hr className="border border-white" />
        <br />
        <span className="text-center text-white text-sm uppercase block">
          ©2025 COPYRIGHT DMC CONSULTING — Tous droits réservés
        </span>
      </div>
    </footer>
  );
};
