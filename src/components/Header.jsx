import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom"; 

function Header() {

    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
        const el = document.querySelector(location.hash);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
        }
    }, [location]);
    
    const [menuOpen, setMenuOpen] = useState(false);
    const [showSolutions, setShowSolutions] = useState(false);
    const [showSecteurs, setShowSecteurs] = useState(false);
    const [showAPropos, setShowAPropos] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        setShowSolutions(false);
        setShowSecteurs(false);
        setShowAPropos(false);
    };

    const navLinkClass = ({ isActive }) =>
        `transition duration-150 ${isActive ? "text-[#F49F1E] border-b border-[#F49F1E]" : "text-white border-b border-transparent hover:border-white"}`;

    return (
        <header className="max-w-[2560px] m-auto">
            <div className="bg-[#1C4179] flex justify-between items-center px-6 md:px-16 lg:px-28 2xl:px-56 py-3">
                <a href="/">
                    <img loading="lazy" src="./img/logo_dmc.png" alt="Logo" className="w-18 md:w-20 lg:w-24 xl:w-32" />
                </a>

                <nav className="flex items-center">
                    <ul className="hidden md:flex gap-4 lg:gap-8 text-base xl:text-lg font-medium relative z-20">
                        <li className="">
                            <NavLink to="/" className={navLinkClass}>Accueil</NavLink>
                        </li>

                        {/* Solutions */}
                        <li
                            className="relative flex items-center gap-2  cursor-pointer"
                            // onMouseEnter={() => setShowSolutions(true)}
                            onClick={() => setShowSolutions(!showSolutions)}
                        >
                            <div className="flex items-center gap-2">
                                <NavLink to="/solutions" className={navLinkClass}>Solutions</NavLink>
                                <IoIosArrowDown  className="text-white" />
                            </div>
                            {showSolutions && (
                                <ul onMouseLeave={() => setShowSolutions(false)} className="absolute top-full left-0 mt-2 flex-col bg-white text-[#1C4179] shadow-lg rounded-md z-10 w-48 overflow-hidden">
                                    <li className="px-4 py-2 hover:bg-gray-100">
                                        <NavLink to="/solutions#produit" onClick={() => setShowSolutions(false)}>Nos Produits</NavLink>
                                    </li>
                                    <li className="px-4 py-2 hover:bg-gray-100">
                                        <NavLink to="/solutions#services" onClick={() => setShowSolutions(false)}>Nos Services</NavLink>
                                    </li>
                                </ul>
                            )}
                        </li>

                        {/* Secteurs */}
                        <li
                            className="relative flex items-center gap-2  cursor-pointer"
                            // onMouseEnter={() => setShowSecteurs(true)}
                            onClick={() => setShowSecteurs(!showSecteurs)}
                        >
                            <div  className="flex items-center gap-2">
                                <NavLink to="/secteurs" className={navLinkClass}>Secteurs</NavLink>
                                <IoIosArrowDown className="text-white" />
                            </div>
                            {showSecteurs && (
                                <ul onMouseLeave={() => setShowSecteurs(false)} className="absolute top-full left-0 mt-2 flex-col bg-white text-[#1C4179] shadow-lg rounded-md z-10 w-64 overflow-hidden">
                                    {["Oil & Gas", "Mines & Carrieres", "Marine", "Agro-alimentaire", "Forestière", "Construction"].map((secteur, i) => (
                                        <li key={i} className="px-4 py-2 hover:bg-gray-100">
                                            <NavLink to={`/secteurs#${secteur.toLowerCase().replace(/ & | /g, "-")}`} onClick={() => setShowSecteurs(false)}>
                                                {secteur}
                                            </NavLink>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>

                        {/* A propos */}
                        <li
                            className="relative flex items-center gap-2  cursor-pointer"
                            // onMouseEnter={() => setShowAPropos(true)}
                            onClick={() => setShowAPropos(!showAPropos)}
                        >
                            <div onClick={() => setShowAPropos(!showAPropos)} className="flex items-center gap-2">
                                <NavLink to="/a_propos" className={navLinkClass}>À propos</NavLink>
                                <IoIosArrowDown className="text-white" />
                            </div>
                            {showAPropos && (
                                <ul onMouseLeave={() => setShowAPropos(false)} className="absolute top-full left-0 mt-2 flex-col bg-white text-[#1C4179] shadow-lg rounded-md z-10 w-64 overflow-hidden">
                                    <li className="px-4 py-2 hover:bg-gray-100">
                                        <NavLink to="/a_propos#synergie" onClick={() => setShowAPropos(false)}>Synergie des Savoir-faire</NavLink>
                                    </li>
                                    <li className="px-4 py-2 hover:bg-gray-100">
                                        <NavLink to="/a_propos#engagements" onClick={() => setShowAPropos(false)}>Nos Engagements</NavLink>
                                    </li>
                                </ul>
                            )}
                        </li>

                        <li className="">
                            <NavLink to="/contacts" className={navLinkClass}>Contacts</NavLink>
                        </li>
                    </ul>

                    {!menuOpen ? (
                        <IoMenu onClick={toggleMenu} className="md:hidden text-3xl text-white cursor-pointer" />
                    ) : (
                        <RxCross2 onClick={toggleMenu} className="md:hidden text-3xl text-white cursor-pointer" />
                    )}
                </nav>
            </div>

            {/* Mobile Menu */}
            <div className={`bg-[#1C4179] px-6 md:px-16 lg:px-28 py-6 md:hidden ${menuOpen ? "block" : "hidden"}`}>
                <ul className="flex flex-col gap-5 lg:gap-8 text-base xl:text-lg font-medium text-white">
                    <li><NavLink to="/" onClick={toggleMenu} className={navLinkClass}>Accueil</NavLink></li>

                    {/* Solutions Mobile */}
                    <li>
                        <div onClick={() => setShowSolutions(!showSolutions)} className="flex items-center gap-2 cursor-pointer">
                            <span>Solutions</span>
                            <IoIosArrowDown className="text-white" />
                        </div>
                        {showSolutions && (
                            <ul className="mt-2 pl-4 text-sm flex flex-col gap-2">
                                <li><NavLink to="/solutions#produits" onClick={toggleMenu}>Nos Produits</NavLink></li>
                                <li><NavLink to="/solutions#services" onClick={toggleMenu}>Nos Services</NavLink></li>
                            </ul>
                        )}
                    </li>

                    {/* Secteurs Mobile */}
                    <li>
                        <div onClick={() => setShowSecteurs(!showSecteurs)} className="flex items-center gap-2 cursor-pointer">
                            <span>Secteurs</span>
                            <IoIosArrowDown className="text-white" />
                        </div>
                        {showSecteurs && (
                            <ul className="mt-2 pl-4 text-sm flex flex-col gap-2">
                                {["Oil & Gas", "Mines & Carrieres", "Marine", "Agro-alimentaire", "Forestière", "Construction"].map((secteur, i) => (
                                    <li key={i}>
                                        <NavLink to={`/secteurs#${secteur.toLowerCase().replace(/ & | /g, "-")}`} onClick={toggleMenu}>
                                            {secteur}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>

                    {/* A propos Mobile */}
                    <li>
                        <div onClick={() => setShowAPropos(!showAPropos)} className="flex items-center gap-2 cursor-pointer">
                            <span>À propos</span>
                            <IoIosArrowDown className="text-white" />
                        </div>
                        {showAPropos && (
                            <ul className="mt-2 pl-4 text-sm flex flex-col gap-2">
                                <li><NavLink to="/a_propos#synergie" onClick={toggleMenu}>Synergie des Savoir-faire</NavLink></li>
                                <li><NavLink to="/a_propos#engagements" onClick={toggleMenu}>Nos Engagements</NavLink></li>
                            </ul>
                        )}
                    </li>

                    <li><NavLink to="/contacts" onClick={toggleMenu} className={navLinkClass}>Contacts</NavLink></li>
                </ul>
            </div>
        </header>
    );
}

export default Header;
