"use client"

import Drawer from './Drawer'
import MobileNav from './MobileNav';
import Table from './Table'
const Dashboard = () => {
    return (
        <main className="lg:flex bg-[#101213]">
            <div className="lg:w-48 hidden lg:block">
                <Drawer />
            </div>
            <div className="w-full lg:hidden">
                <MobileNav />
            </div>
            <article className="relative w-screen h-screen p-10">
                <header className="border-b border-gray-700 mb-8 lg:flex lg:justify-between lg:items-center lg:mb-5 md:border-0">
                    <h1 className="dashboard pb-5 text-3xl">
                        Dashboard
                    </h1>
                    <div className="hidden lg:flex">
                        <div className="rounded-3xl flex items-center border border-gray-700 w-60 mr-3 text-[.5rem] space-x-2 px-2 h-8">
                            {/* search icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-3 h-3 text-gray-700">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                            </svg>
                            <span className="text-gray-700">search for a token...</span>
                        </div>
                        <div className="flex items-center rounded-3xl border border-gray-700 px-2 mr-3 text-[.8rem] space-x-2">
                            <span className="flag"></span>
                            <span className="usd">USD</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-3 h-3">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                        </div>
                        <div className="rounded-3xl border border-gray-700 flex items-center text-[.8rem] space-x-2 px-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122" />
                            </svg>
                            <span className="">29</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-3 h-3">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                        </div>
                    </div>
                </header>
                <div className="">
                    <p className="flex flex-col space-y-2">
                        <small className="text-gray-600">Portfolio value</small>
                        <b className="flex items-center space-x-3">
                            <span className="text-3xl">
                                $94.84
                            </span>
                            {/* svg eye */}
                            <div className="rounded bg-[#1e1f25] p-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                                </svg>
                            </div>
                        </b>
                    </p>
                </div>
                <section className="w-full bg-[#1e1f25] mt-10 p-5 rounded-2xl">
                    <div className="utility-btn mb-5">
                        <div className="flex flex-wrap lg:justify-between">
                            <ul className="w-96 rounded-full flex justify-between items-center border border-gray-700 text-[.9rem] h-8 px-[0.10rem] mb-3">
                                <li className="rounded-3xl bg-[#25262b] px-[1.20rem] py-[0.20rem]">
                                    <a href="" className="">
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
                                <div className="flex items-center rounded-3xl border border-gray-700 h-8 text-[.8rem] space-x-2 px-5">
                                    <span className="">Token view</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-3 h-3">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </div>
                                <div className="rounded-3xl border border-gray-700 flex items-center text-[.8rem] h-8 space-x-2 px-5">
                                    <span className="">All accounts</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-3 h-3">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </div>
                                <div className="rounded-3xl border border-gray-700 flex items-center text-[.8rem] space-x-2 px-5 h-8">
                                    <span className="">3 Networks</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-3 h-3">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </div>
                                <div className="rounded-3xl border border-gray-700 flex items-center text-[.8rem] space-x-2 px-3 h-8">
                                    <span className="">More</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-3 h-3">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Table />
                </section>
            </article>
        </main>
    );
}

export default Dashboard