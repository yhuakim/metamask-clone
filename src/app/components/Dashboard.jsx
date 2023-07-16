"use client"

import Currencies from './Currencies';
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
                <header className="border-b border-gray-700 mb-8 lg:flex lg:justify-between lg:items-center lg:mb-5 md:border-0 text-gray-300">
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
                        {/* <button onClick={currencyChange} className="flex items-center rounded-3xl border border-gray-700 px-2 mr-3 text-[.8rem] space-x-2">
                            <span className="flag"></span>
                            <span className="usd">USD</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-3 h-3">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                        </button> */}

                        <Currencies />

                        {/* <button onClick={gasChange} className="rounded-3xl border border-gray-700 flex items-center text-[.8rem] space-x-2 px-2">
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="gas-pump" class="w-3 h-3 text-gray-300" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M336 448H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h320c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm157.2-340.7l-81-81c-6.2-6.2-16.4-6.2-22.6 0l-11.3 11.3c-6.2 6.2-6.2 16.4 0 22.6L416 97.9V160c0 28.1 20.9 51.3 48 55.2V376c0 13.2-10.8 24-24 24s-24-10.8-24-24v-32c0-48.6-39.4-88-88-88h-8V64c0-35.3-28.7-64-64-64H96C60.7 0 32 28.7 32 64v352h288V304h8c22.1 0 40 17.9 40 40v27.8c0 37.7 27 72 64.5 75.9 43 4.3 79.5-29.5 79.5-71.7V152.6c0-17-6.8-33.3-18.8-45.3zM256 192H96V64h160v128z"></path></svg>
                            <span className="">29</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-3 h-3">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                        </button> */}
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