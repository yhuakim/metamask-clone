"use client"

import { useState } from "react";
import { coins } from "@/components/Data";
import { ChevronDownIcon } from "@heroicons/react/24/outline";


const SwapAction = () => {
    const [selected, setSelected] = useState('')
    const optionsSelect = (e) => {
        setSelected(e.target.innerText)
        console.log(e.target);

        console.log(selected);
    }
    return (
        <>
            <section>
                <label name="swapfrom" className="">
                    <div className="">
                        <button className="flex">
                            {coins.map((coin) => (
                                coin.name === selected? <span className="flex" key={coin.name}>
                                    <coin.icon className="w-6 h-6 bg-blue-600 rounded-full mr-2"/>
                                    {selected}
                                </span>: ''
                            ))}
                            <ChevronDownIcon className="w-6 h-6" />
                        </button>
                        <div className="">
                                
                            <ul className="">
                                {
                                    coins.map((coin) => (
                                    <li key={coin.name} onClick={optionsSelect} className="flex">
                                        <coin.icon className="w-6 h-6 bg-blue-600 rounded-full mr-2" />
                                        <span className="flex flex-col">
                                        <span className="">{coin.alias}</span>
                                        {coin.name}
                                        </span>
                                    </li>

                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="">
                        <input type="number" name="amount" id="amount" className="" />
                    </div>
                </label>
            </section>
        </>
    )
}
export default SwapAction