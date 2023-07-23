"use client"

import Currency from "./Currency";
import SearchBar from "./SearchBar";
import GasPrice from "./GasPrice";

export default function BridgeComponent() {
    return (
        <main className="relative bg-white w-auto h-auto p-10 dark:bg-[#101213]">
            <header className="text-slate-700 border-b border-gray-700 mb-8 lg:flex lg:justify-between lg:items-center lg:mb-5 md:border-0 dark:text-gray-300">
                <h1 className="dashboard pb-5 text-3xl">
                    Bridge
                </h1>
                <div className="hidden lg:items-center lg:flex space-x-5">

                    <SearchBar />

                    {/* <Currencies /> */}

                    <Currency />

                    <GasPrice />

                </div>
            </header>
        </main>
    );
}