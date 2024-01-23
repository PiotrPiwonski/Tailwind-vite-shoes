import NikeLogo from '../assets/nike-logo.svg?react';
import { RxHamburgerMenu } from "react-icons/rx";
import { TbShoppingBag } from "react-icons/tb";
import {useState} from "react";

const ROUTES = ["Home", "About", "Services", "Pricing", "Contact"];
export function Nav() {
    const [isMobileMenuShown, setIsMobileMenuShown] = useState(false);
    return (

        <nav className="flex flex-wrap justify-between items-center">
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
                           className={`py-2 px-2 cursor-pointer rounded 
                           ${i===0 
                               ? "bg-blue-500 text-white lg:bg-transparent lg:text-blue-500" 
                               : "hover:bg-gray-100"}`}
                       >{route}</li>
                    })}
                </ul>
            </div>
            <div className="fixed bottom-4 left-4 lg:static">
                <div className="flex-center h-12 w-12 rounded-full bg-white shadow-md">
                    <TbShoppingBag/>
                </div>
            </div>

        </nav>

    )
}

