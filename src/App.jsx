import {Nav} from "./components/Nav.jsx";
import {ShoeDetail} from "./components/ShoeDetail.jsx";
import {SHOE_LIST} from "./constant.js";
import {NewArrivalsSection} from "./components/NewArrivalsSection.jsx";

export function App() {

  return (
    <>
      <div className="animate-fadeIn p-10 xl:p-24">
        <Nav/>
        <ShoeDetail/>
        <NewArrivalsSection items={SHOE_LIST}/>
      </div>
    </>
  )
}

