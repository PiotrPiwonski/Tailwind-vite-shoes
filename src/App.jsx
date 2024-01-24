import {Nav} from "./components/Nav.jsx";
import {ShoeDetail} from "./components/ShoeDetail.jsx";
import {SHOE_LIST} from "./constant.js";
import {NewArrivalsSection} from "./components/NewArrivalsSection.jsx";
import {Sidebar} from "./components/Sidebar.jsx";
import {useState} from "react";

export function App() {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <div className="animate-fadeIn p-10 xl:p-24">
        <Nav onClickShoppingBtn={() => setIsSidebarOpen(true)}/>
        <ShoeDetail/>
        <NewArrivalsSection items={SHOE_LIST}/>
        <Sidebar isOpen={isSidebarOpen} onClickClose={() => setIsSidebarOpen(false)}>
            Hi
        </Sidebar>
      </div>
    </>
  )
}

