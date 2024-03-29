import {IoIosArrowDown} from "react-icons/io";
import {twMerge} from "tw-merge";

export function Select({title, options, className, value, onChange}) {

    return (
        <div className="relative dark:text-black">
            <select
                onChange={(e) => onChange(e.target.value)}
                value={value || ""}
                    className={twMerge(`appearance-none border border-gray-300
                     bg-white ${className}`,)}
            >
                <option value="" disabled hidden>
                    {title}
                </option>
                {options.map((option) => (
                    <option value={option} key={option}>
                        {option}
                    </option>
                ))}
            </select>
            <div className="absolute inset-y-0  right-0 flex-center pr-3 pointer-events-none">
                <IoIosArrowDown/>
            </div>
        </div>
    );
}
