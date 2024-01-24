import {Nav} from "./components/Nav.jsx";
import {ShoeDetail} from "./components/ShoeDetail.jsx";
import {Card} from "./components/Card.jsx";
import {SHOE_LIST} from "./constant.js";

export function App() {

  return (
    <>
      <div className="animate-fadeIn p-10 xl:p-24">
        {/*<Nav/>*/}
        {/*<ShoeDetail/>*/}
          <Card item={SHOE_LIST[0]}/>
      </div>
    </>
  )
}

