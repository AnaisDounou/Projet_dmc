import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="max-w-[1800px] m-auto">
            <div className="bg-[#1C4179] flex justify-between items-center px-6 md:px-16 lg:px-28 py-3">
                <img src="./img/logo_dmc.png" alt="Logo" className="w-18 md:w-20 lg:w-24 xl:w-32" />
                <nav className="flex items-center">
                    <ul className="hidden md:flex gap-4 lg:gap-8 text-white text-base xl:text-lg font-medium">
                        <li><Link to="/">Accueil</Link></li>
                        <li className="flex gap-2 items-center"><Link to="/solutions">Solutions</Link> <IoIosArrowDown /></li>
                        <li className="flex gap-2 items-center"><Link to="/secteurs">Secteurs</Link> <IoIosArrowDown /></li>
                        <li className="flex gap-2 items-center">A propos <IoIosArrowDown /></li>
                        <li>Contacts</li>
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
                <ul className="flex flex-col gap-5 lg:gap-8 text-white text-base xl:text-lg font-medium">
                    <li><Link to="/" onClick={toggleMenu}>Accueil</Link></li>
                    <li className="flex gap-2 items-center"><Link to="/solutions" onClick={toggleMenu}>Solutions</Link> <IoIosArrowDown /></li>
                    <li className="flex gap-2 items-center"><Link to="/secteurs" onClick={toggleMenu}>Secteurs</Link> <IoIosArrowDown /></li>
                    <li className="flex gap-2 items-center">A propos <IoIosArrowDown /></li>
                    <li><Link to="/" onClick={toggleMenu}>Contacts</Link></li>
                </ul>
            </div>
        </header>
    );
}

export default Header;
