"use client"

import { coins } from "@/components/Data";
import PageHeader from "@/components/PageHeader";
import { useState } from "react";
import SwapAction from "./swapAction";
import { ChevronDownIcon } from "@heroicons/react/24/outline";


export default function SwapCoin() {
    const [selected, setSelected] = useState('Ethereum')
    const optionsSelect = (e) => {
        setSelected(e.target.innerText)

        console.log(selected);
    }
    return (
        <main className="h-screen overflow-y-auto bg-slate-300 w-auto lg:p-10 dark:bg-[#101213]">
            <PageHeader title={'Swap'} />
            <section className="">
                <div className="">
                    {/* <div className="">
                        <button className="flex justify-between">
                            {coins.map((coin) => (
                                coin.name === selected? <span className="flex">
                                    <coin.icon className="w-6 h-6 bg-blue-600 rounded-full mr-2"/>
                                    {selected}
                                </span>: ''
                            ))}
                            <ChevronDownIcon className="w-6 h-6" />
                        </button>
                        <ul className="">
                            {
                                coins.map((coin) => (
                                <li key={coin.name} onClick={optionsSelect} className="flex">
                                    <coin.icon className="w-6 h-6 bg-blue-600 rounded-full mr-2" />
                                    {coin.name}
                                </li>

                                ))
                            }
                        </ul>
                    </div> */}
                    <SwapAction />
                </div>
            </section>
        </main>
    );
}