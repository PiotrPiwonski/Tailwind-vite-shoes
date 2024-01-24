import {Nav} from "./components/Nav.jsx";
import {ShoeDetail} from "./components/ShoeDetail.jsx";

export function App() {

  return (
    <>
      <div className="p-10 xl:p-24">
        <Nav/>
        <ShoeDetail/>
      </div>
    </>
  )
}

