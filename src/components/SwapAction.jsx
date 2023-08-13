"use client"

import { useState } from "react";
import { coins } from "@/components/Data";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/24/outline";


const SwapAction = () => {
    const [selected, setSelected] = useState('')
    const [show, setShow] = useState(false)
    const optionsSelect = (e) => {
        setSelected(e.target.innerText)
        // console.log(e.target);

        console.log(selected);
    }
    return (
        <>
            <section>
                <label name="swapfrom" className="flex w-full">
                    <div className="w-full">
                        <b className="">Swap from</b>
                        <div className="flex border border-gray-500 w-full h-16 items-center rounded-lg flex-shrink">
                            <button onClick={() => setShow(!show)} className="flex justify-between border-r border-gray-500 p-4 md:p-10 space-x-2 basis-1/2 h-full items-center">
                                {coins.map((coin) => (
                                    coin.alias === selected? <span key={coin.alias} className="flex space-x-2">
                                        <coin.icon className="w-6 h-6 bg-blue-600 rounded-full"/>
                                        <i className="not-italic">{selected}</i>
                                    </span>: ''
                                ))}
                                {selected === ''?<i className="">select a token</i> : ''}
                                <ChevronDownIcon className="w-6 h-6" />
                            </button>
                            <div className="w-full basis-1/2 h-full">
                                <input type="number" name="amount" id="amount" className="p-3 w-full h-full bg-transparent" defaultValue={0} />
                            </div>
                            
                        </div>
                        <div className={show? "": "hidden"}>
                            <ul className="">
                                {
                                    coins.map((coin) => (
                                    <li key={coin.name} onClick={optionsSelect} className="">
                                        <span className="flex space-x-2 py-2">
                                        <coin.icon className="w-6 h-6 bg-blue-600 rounded-full" />
                                        <i className="not-italic">{coin.alias}</i>
                                        </span>
                                        {/* <i className="ml-6">{coin.name}</i> */}
                                    </li>

                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </label>
            </section>
        </>
    )
}
export default SwapAction