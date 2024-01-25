import {CiTrash} from "react-icons/ci";
import {Select} from "./Select.jsx";
import {SIZES, QTY} from "../constant.js";

export function CartItem({item: {product, qty, size}}) {
    return (
        <div className="hover:bg-[#DAFFA2] p-2 cursor-pointer bg-gray-50 space-y-2
        dark:bg-transparent dark:hover:bg-night-50">
            <div className="flex space-x-2">
                <img className="h-24" src={product.src} alt="shoe"/>
                <div className="space-y-2">
                    <div className="font-bold dark:text-white">{product.title}</div>
                    <div className="text-sm text-gray-400">{product.description}</div>
                </div>
                <div className="font-bold dark:text-white">{product.price}$</div>
            </div>
            <div className="flex justify-between pl-32">
                <div className="flex space-x-6">
                    <div>
                        <div className="font-bold dark:text-white">SIZE</div>
                        <Select
                            value={size}
                            options={SIZES}
                            title=""
                            className={"w-16 p-1 pl-2"}
                        />
                    </div>
                    <div>
                        <div className="font-bold dark:text-white">QTY</div>
                        <Select
                            value={qty}
                            options={QTY}
                            title=""
                            className={"w-16 p-1 pl-2"}
                        />
                    </div>
                </div>
                <button>
                    <CiTrash size={25} className="text-black dark:text-white"/>
                </button>
            </div>
        </div>

    )
}
