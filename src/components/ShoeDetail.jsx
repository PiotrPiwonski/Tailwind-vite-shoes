import {Select} from "./Select.jsx";
import {QTY, SIZES} from "../constant.js";

export function ShoeDetail({shoe}) {

    return (
      <div className="flex flex-col lg:flex-row-reverse space-y-4 dark:text-white">
          <div className="flex-1 lg:-mt-32 lg:ml-28">
              <div className="bg-gradient-to-br from-[#F637CF] from-5% via-[#E3D876]
              via-40% to-[#4CC4C6] h-full flex-center">
                  <img className="animate-float" src={shoe.src} alt="shoe"/>
              </div>
          </div>
          <div className="flex-1 space-y-6">
            <div className="text-5xl font-black md:text-9xl">
                {shoe.title}
            </div>
              <div className="font-medium md:text-xl">
                  {shoe.description}
              </div>
              <div className="flex space-x-6">
                  <div className="text-3xl font-extrabold md:text-6xl">
                      {shoe.price} $
                  </div>
                  <Select title={"QTY"} options={QTY} className={"w-24 p-4"}/>
                  <Select title={"SIZE"} options={SIZES} className={"w-24 p-4"}/>
              </div>

              <div className="space-x-10">
                  <button className="h-14 w-44 bg-black text-white hover:bg-gray-900
               active:bg-gray-700 btn-press-anim dark:bg-white dark:text-black">
                      Ad to bag
                  </button>
                  <a href="#" className="text-lg font-bold underline underline-offset-4">
                      View details
                  </a>
              </div>
          </div>
      </div>
    );
}
