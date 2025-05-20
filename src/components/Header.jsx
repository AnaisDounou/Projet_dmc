import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { NavLink } from "react-router-dom";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const navLinkClass = ({ isActive }) =>
        `transition duration-150 ${isActive ? "text-[#F49F1E] underline" : "text-white"}`;

    return (
        <header className="max-w-[1800px] m-auto">
            <div className="bg-[#1C4179] flex justify-between items-center px-6 md:px-16 lg:px-28 py-3">
                <img src="./img/logo_dmc.png" alt="Logo" className="w-18 md:w-20 lg:w-24 xl:w-32" />
                <nav className="flex items-center">
                    <ul className="hidden md:flex gap-4 lg:gap-8 text-base xl:text-lg font-medium">
                        <li className="hover:underline"><NavLink to="/" className={navLinkClass}>Accueil</NavLink></li>
                        <li className="flex gap-2 items-center hover:underline">
                            <NavLink to="/solutions" className={navLinkClass}>Solutions</NavLink>
                            <IoIosArrowDown className="text-white" />
                        </li>
                        <li className="flex gap-2 items-center hover:underline">
                            <NavLink to="/secteurs" className={navLinkClass}>Secteurs</NavLink>
                            <IoIosArrowDown className="text-white" />
                        </li>
                        <li className="flex gap-2 items-center hover:underline">
                            <NavLink to="/a_propos" className={navLinkClass}>A propos</NavLink>
                            <IoIosArrowDown className="text-white" />
                        </li>
                        <li className="hover:underline"><NavLink to="/contacts" className={navLinkClass}>Contacts</NavLink></li>
                    </ul>

                    {/* Hamburger & Close Icons */}
                    {!menuOpen ? (
                        <IoMenu onClick={toggleMenu} className="md:hidden text-3xl text-white cursor-pointer" />
                    ) : (
                        <RxCross2 onClick={toggleMenu} className="md:hidden text-3xl text-white cursor-pointer" />
                    )}
                </nav>
            </div>

            {/* Mobile Menu */}
            <div className={`bg-[#1C4179] px-6 md:px-16 lg:px-28 py-6 md:hidden ${menuOpen ? "block" : "hidden"}`}>
                <ul className="flex flex-col gap-5 lg:gap-8 text-base xl:text-lg font-medium">
                    <li><NavLink to="/" onClick={toggleMenu} className={navLinkClass}>Accueil</NavLink></li>
                    <li className="flex gap-2 items-center">
                        <NavLink to="/solutions" onClick={toggleMenu} className={navLinkClass}>Solutions</NavLink>
                        <IoIosArrowDown className="text-white" />
                    </li>
                    <li className="flex gap-2 items-center">
                        <NavLink to="/secteurs" onClick={toggleMenu} className={navLinkClass}>Secteurs</NavLink>
                        <IoIosArrowDown className="text-white" />
                    </li>
                    <li className="flex gap-2 items-center">
                        <NavLink to="/a_propos" onClick={toggleMenu} className={navLinkClass}>A propos</NavLink>
                        <IoIosArrowDown className="text-white" />
                    </li>
                    <li><NavLink to="/contacts" onClick={toggleMenu} className={navLinkClass}>Contacts</NavLink></li>
                </ul>
            </div>
        </header>
    );
}

export default Header;
