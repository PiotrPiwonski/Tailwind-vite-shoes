import {Nav} from "./components/Nav.jsx";
import {ShoeDetail} from "./components/ShoeDetail.jsx";
import {SHOE_LIST} from "./constant.js";
import {NewArrivalsSection} from "./components/NewArrivalsSection.jsx";
import {Sidebar} from "./components/Sidebar.jsx";
import {useEffect, useState} from "react";
import {Cart} from "./components/Cart.jsx";
import {BiMoon, BiSun} from "react-icons/bi";


export function App() {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [currentShoe, setCurrentShoe] = useState(SHOE_LIST[0]);
    const [cartItems, setCartItems] = useState([]);

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
    };

    const removeFromCart = (productId) => {
        const updatedCartItems = [...cartItems];
        const existingItemIndex = cartItems.findIndex(item => item.product.id === productId);
        updatedCartItems.splice(existingItemIndex, 1);
        setCartItems(updatedCartItems);
    }

    const addToCard = (product, qty,  size) => {
        if(qty && size) {
           const updatedCartItems = [...cartItems];
           const existingItemIndex = cartItems.findIndex(item => item.product.id === product.id);
           if(existingItemIndex > -1) {
               updatedCartItems[existingItemIndex].qty = qty;
               updatedCartItems[existingItemIndex].size = size;
           } else {
               updatedCartItems.push({product: product, qty: qty, size: size});
           }
            setCartItems(updatedCartItems);
        }
    };

  return (
    <>
      <div className="animate-fadeIn p-10 xl:p-24 dark:bg-night">
        <Nav onClickShoppingBtn={() => setIsSidebarOpen(true)}/>
        <ShoeDetail shoe={currentShoe} onClickAdd={addToCard}/>
        <NewArrivalsSection items={SHOE_LIST} onClickCard={setCurrentShoe}/>
        <Sidebar
            isOpen={isSidebarOpen}
            onClickClose={() => setIsSidebarOpen(false)}
        >
            <Cart cartItems={cartItems} onClickTrash={removeFromCart}/>
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

