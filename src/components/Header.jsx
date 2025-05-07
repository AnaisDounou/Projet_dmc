import { IoIosArrowDown } from "react-icons/io"
import { IoMenu } from "react-icons/io5"
import { Link } from "react-router-dom"

function Header(){
    return(
        <header className="max-w-[1800px] m-auto">
            <div className="bg-[#1C4179] flex justify-between items-center px-6 md:px-16 lg:px-28 py-3">
                <img src="./img/logo_dmc.png" alt="" className="w-18 md:w-20 lg:w-24 xl:w-32"/>
                <nav>
                    <ul className="hidden md:flex gap-4 lg:gap-8 text-white text-base xl:text-lg font-medium">
                        <li className=""> <Link to={'/'}>Accueil</Link> </li>
                        <li className="flex gap-2 items-center"><Link to={'/solutions'}>Solutions</Link> <IoIosArrowDown /> </li>
                        <li className="flex gap-2 items-center"><Link to={'/'}></Link>Secteurs <IoIosArrowDown /> </li>
                        <li className="flex gap-2 items-center">A propos <IoIosArrowDown /> </li>
                        <li className="">Contacts</li>
                    </ul>
                    <IoMenu className="md:hidden text-3xl text-white" />
                </nav>
            </div>
        </header>
    )
}

export default Header