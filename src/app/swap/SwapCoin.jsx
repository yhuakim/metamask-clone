"use client"

import { coins } from "@/components/Data";
import PageHeader from "@/components/PageHeader";
import { useState } from "react";
import SwapAction from "../../components/SwapAction";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/24/outline";


export default function SwapCoin() {
    const [selected, setSelected] = useState('Ethereum')
    const [show, setShow] = useState(false)
    const optionsSelect = (e) => {
        setSelected(e.target.innerText)
        setShow(!show)
        console.log(selected);
    }
    const toggleCoinList = () => {
        setShow(!show)
    }
    return (
        <main className="h-screen overflow-y-auto text-gray-800 w-full lg:p-10 dark:bg-[#101213]">
            <PageHeader title={'Swap'} />
            <section className="flex w-screen py-20">
                <div className="w-screen px-10">
                    <div className="w-full mb-10">
                        <button onClick={toggleCoinList} className="flex space-x-5 justify-between items-center w-full rounded-full border border-gray-500 p-2 hover:bg-blue-600/25 hover:border-blue-700/75 group">
                            {coins.map((coin) => (
                                coin.name === selected? <span className="flex items-center text-lg space-x-3">
                                    <coin.icon className="w-8 h-8 bg-blue-600 rounded-full"/>
                                    <i className="not-italic">{selected}</i>
                                </span>: ''
                            ))}
                            <ChevronDownIcon className="w-4 h-4 group-hover:text-blue-600/75" />
                        </button>
                        <ul className={show? "" : "hidden"}>
                            {
                                coins.map((coin) => (
                                <li key={coin.name} onClick={optionsSelect} className="flex items-center space-x-2 p-2">
                                    <CheckIcon className={selected === coin.name? "block w-6 h-6": "hidden"} />
                                    <CheckIcon className={selected === coin.name? "hidden": "w-6 h-6 text-transparent"} />
                                    <span className="flex space-x-4">
                                    <coin.icon className="w-6 h-6 bg-blue-600 rounded-full" />
                                        <i className="not-italic">{coin.name}</i>
                                    </span>
                                </li>

                                ))
                            }
                        </ul>
                    </div>
                    <SwapAction />
                </div>
            </section>
        </main>
    );
}