import NikeLogo from '../assets/nike-logo.svg?react';
import { RxHamburgerMenu } from "react-icons/rx";
import { TbShoppingBag } from "react-icons/tb";
import {useState} from "react";

const ROUTES = ["Home", "About", "Services", "Pricing", "Contact"];
export function Nav({onClickShoppingBtn}) {
    const [isMobileMenuShown, setIsMobileMenuShown] = useState(false);
    return (

        <nav className="flex flex-wrap justify-between items-center z-10 relative">
            <a href="#">
                <NikeLogo className="h-20 w-20"/>
            </a>
            <button
                onClick={() => setIsMobileMenuShown(!isMobileMenuShown)}
                className="hover:bg-gray-100 p-2 focus:ring-2 focus:ring-gray-200 rounded-lg
                lg:hidden">
                <RxHamburgerMenu size={25}/>
            </button>
            <div className={`w-full lg:w-auto lg:block 
            ${isMobileMenuShown === false && "hidden"}`}>
                <ul className="lg:flex-row flex flex-col bg-gray-50 text-lg border
                 border-gray-100 rounded-lg p-4 lg:bg-transparent lg:border-none lg:space-x-8">
                    {ROUTES.map((route, i) => {
                       return <li
                           key={route}
                           className={`py-2 px-2 cursor-pointer rounded lg:hover:bg-transparent
                           lg:hover:text-blue-500
                           ${i===0 
                               ? "bg-blue-500 text-white lg:bg-transparent lg:text-blue-500" 
                               : "hover:bg-gray-100"} 
                               ${(i === 3 || i === 4) && "lg:text-white" }`}
                       >{route}</li>
                    })}
                </ul>
            </div>
            <div
                onClick={onClickShoppingBtn}
                className="fixed bottom-4 left-4 lg:static btn-press-anim"
            >
                <div className="flex-center cursor-pointer h-12 w-12 rounded-full bg-white shadow-md lg:mr-8">
                    <TbShoppingBag/>
                </div>
            </div>

        </nav>

    )
}

