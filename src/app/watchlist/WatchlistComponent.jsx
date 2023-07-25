"use client"

import Currency from "../../components/Currency";
import SearchBar from "../../components/SearchBar";
import GasPrice from "../../components/GasPrice";

export default function WatchlistComponent() {
    return (
        <main className="relative bg-white w-auto h-auto p-10 dark:bg-[#101213]">
            <header className="text-slate-700 border-b border-gray-700 mb-8 lg:flex lg:justify-between lg:items-center lg:mb-5 md:border-0 dark:text-gray-300">
                <h1 className="dashboard pb-5 text-3xl">
                    Watchlist
                </h1>
                <div className="hidden lg:items-center lg:flex space-x-5">

                    <SearchBar className={"placeholder:italic placeholder:text-slate-400 block rounded-full bg-white w-full border border-slate-300 py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"} />

                    <Currency />

                    <GasPrice />

                </div>
            </header>
        </main>
    );
}