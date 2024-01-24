import {Nav} from "./components/Nav.jsx";
import {ShoeDetail} from "./components/ShoeDetail.jsx";
import {SHOE_LIST} from "./constant.js";
import {NewArrivalsSection} from "./components/NewArrivalsSection.jsx";
import {Sidebar} from "./components/Sidebar.jsx";
import {useState} from "react";
import {CartItem} from "./components/CartItem.jsx";

export function App() {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <div className="animate-fadeIn p-10 xl:p-24">
        <Nav onClickShoppingBtn={() => setIsSidebarOpen(true)}/>
        <ShoeDetail/>
        <NewArrivalsSection items={SHOE_LIST}/>
        <Sidebar isOpen={isSidebarOpen} onClickClose={() => setIsSidebarOpen(false)}>
            <h2 className="text-2xl font-bold mb-10">
                Cart
            </h2>
            <CartItem item={SHOE_LIST[0]}/>
            <CartItem item={SHOE_LIST[2]}/>
            <CartItem item={SHOE_LIST[3]}/>
        </Sidebar>
      </div>
    </>
  )
}

