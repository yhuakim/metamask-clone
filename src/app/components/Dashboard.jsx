"use client"

import Balance from './Balance';
import Currencies from './Currencies';
import Currency from './Currency';
import Drawer from './Drawer'
import GasPrice from './GasPrice';
import MobileNav from './MobileNav';
import SearchBar from './SearchBar';
import Table from './Table'
const Dashboard = () => {
    return (
        <main className="lg:flex text-slate-600 h-screen bg-white dark:text-slate-100 dark:bg-[#101213]">
            <div className="lg:w-48 hidden lg:block">
                <Drawer />
            </div>
            <div className="w-full lg:hidden">
                <MobileNav />
            </div>
            <article className="relative bg-white w-screen h-auto p-10">
                <header className="text-slate-700 border-b border-gray-700 mb-8 lg:flex lg:justify-between lg:items-center lg:mb-5 md:border-0 dark:text-gray-300">
                    <h1 className="dashboard pb-5 text-3xl">
                        Dashboard
                    </h1>
                    <div className="hidden lg:items-center lg:flex space-x-5">

                        <SearchBar />

                        <Currencies />

                        <Currency />

                        <GasPrice />

                    </div>
                </header>

                <Balance />

                <section className="w-full dark:bg-[#1e1f25] mt-10 p-5 rounded-2xl shadow-lg">
                    <div className="utility-btn mb-5">
                        <div className="flex flex-wrap justify-between items-center">
                            <ul className="w-96 rounded-full flex justify-between items-center border border-slate-300 dark:border-gray-700 text-[.9rem] h-8 px-[0.10rem] mb-3">
                                <li className="rounded-3xl bg-[#415bbc] dark:bg-[#25262b] px-[1.20rem] py-[0.20rem]">
                                    <a href="#tokens" className="text-white">
                                        Tokens
                                    </a>
                                </li>
                                <li className="px-5 py-2 m-1">
                                    <a href="" className="">
                                        NFTs
                                    </a>
                                </li>
                                <li className="px-5 py-2 m-1">
                                    <a href="" className="">
                                        Transactions
                                    </a>
                                </li>
                            </ul>
                            <div className="flex flex-wrap space-x-3 space-y-3 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-3 h-3">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                                </svg>
                                <div className="flex items-center rounded-3xl border border-slate-300 dark:border-gray-700 h-8 text-[.8rem] space-x-2 px-5">
                                    <span className="">Token view</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-3 h-3">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </div>
                                <div className="rounded-3xl border border-slate-300 dark:border-gray-700 flex items-center text-[.8rem] h-8 space-x-2 px-5">
                                    <span className="">All accounts</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-3 h-3">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </div>
                                <div className="rounded-3xl border border-slate-300 dark:border-gray-700 flex items-center text-[.8rem] space-x-2 px-5 h-8">
                                    <span className="">3 Networks</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-3 h-3">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </div>
                                <div className="rounded-3xl border border-slate-300 dark:border-gray-700 flex items-center text-[.8rem] space-x-2 px-3 h-8">
                                    <span className="">More</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-3 h-3">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-auto">
                        <Table />
                    </div>
                </section>
            </article>
        </main>
    );
}

export default Dashboard