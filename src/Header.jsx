import { IoIosArrowDown } from "react-icons/io"
import { IoMenu } from "react-icons/io5"

function Header(){
    return(
        <header>
            <div className="bg-[#1C4179] flex justify-between items-center px-6 lg:px-28 py-3">
                <img src="./img/logo_dmc.png" alt="" className="w-16 lg:w-24"/>
                <nav>
                    <ul className="hidden lg:flex gap-8">
                        <li className="text-white text-base font-medium">Accueil</li>
                        <li className="text-white text-base font-medium flex gap-2 items-center">Solutions <IoIosArrowDown /> </li>
                        <li className="text-white text-base font-medium flex gap-2 items-center">Secteurs <IoIosArrowDown /> </li>
                        <li className="text-white text-base font-medium flex gap-2 items-center">A propos <IoIosArrowDown /> </li>
                        <li className="text-white text-base font-medium">Contacts</li>
                    </ul>
                    <IoMenu className="lg:hidden text-3xl text-white" />
                </nav>
            </div>
        </header>
    )
}

export default Header