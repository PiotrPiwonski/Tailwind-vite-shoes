import {Nav} from "./components/Nav.jsx";
import {ShoeDetail} from "./components/ShoeDetail.jsx";
import {SHOE_LIST} from "./constant.js";
import {NewArrivalsSection} from "./components/NewArrivalsSection.jsx";
import {Sidebar} from "./components/Sidebar.jsx";
import {useEffect, useState} from "react";
import {Cart} from "./components/Cart.jsx";
import {BiMoon, BiSun} from "react-icons/bi";

const FAKE_CART_ITEMS = SHOE_LIST.map((shoe) => {
    return {
        product: shoe,
        qty: 1,
        size: 44
    }
});

export function App() {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    useEffect(() => {
        const isDArkMode = localStorage.getItem("isDarkMode");
        if(isDArkMode === "true") {
            window.document.documentElement.classList.add("dark");
        }
    },[]);

    const toggleDarkMode = () => {
        window.document.documentElement.classList.toggle("dark");
        localStorage.setItem("isDarkMode",
            window.document.documentElement.classList.contains("dark"),
            );

    }

  return (
    <>
      <div className="animate-fadeIn p-10 xl:p-24 dark:bg-night">
        <Nav onClickShoppingBtn={() => setIsSidebarOpen(true)}/>
        <ShoeDetail/>
        <NewArrivalsSection items={SHOE_LIST}/>
        <Sidebar isOpen={isSidebarOpen} onClickClose={() => setIsSidebarOpen(false)}>
            <Cart cartItems={FAKE_CART_ITEMS}/>
        </Sidebar>
          <div className="fixed bottom-4 right-4">
            <button
                onClick={toggleDarkMode}
                className="bg-night-50 px-4 py-2 rounded-full text-white dark:bg-white
                 dark:text-night shadow-lg"
            >
                <BiSun className="hidden dark:block"/>
                <BiMoon className="dark:hidden"/>
            </button>
          </div>
      </div>
    </>
  )
}

