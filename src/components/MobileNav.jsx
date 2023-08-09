"use client"
import { useState } from "react"
import DarkmodeToggle from "./DarkmodeToggle";
import { Navigations } from "./Data";
import { usePathname } from "next/navigation";

const MobileNav = () => {
    const [show, setShow] = useState(false)
    const pathname = usePathname()
    function toggleMenu() {
        setShow(!show);
    }
    return (
        <>
            <div className="w-screen">
                <div className="flex justify-between items-center p-8 mx-auto dark:bg-[#1e1f25]">
                    <button className="" onClick={toggleMenu}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class={show ? "hidden" : "w-8 h-8"}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                    <a href="#" className="flex items-center space-x-2">
                        <img src="/metamask.svg" className="w-[2.5rem]" />
                        <span className="flex flex-col">
                            <b className="leading-3 uppercase tracking-wider font-light">Metamask</b>
                            <small className="text-xs">Portfolio</small>
                        </span>
                    </a>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class={show ? "opacity-0 w-6 h-6" : "w-8 h-8"}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                </div>


                <div className={!show ? "hidden" : "text-gray-700 dark:text-gray-400 w-screen h-screen absolute top-0 z-50"}>
                    <div className="w-full m-2 bg-white dark:bg-[#101213]">
                        <div className="w-full flex space-x-28 md:space-x-48 p-8 border-b border-gray-700">
                            <button className="text-gray-700 dark:text-gray-100" onClick={toggleMenu}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class={show ? "w-8 h-8" : "hidden"}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            <a href="#" className="flex items-center space-x-2">
                                <img src="/metamask.svg" className="w-[2.5rem]" />
                                <span className="flex flex-col">
                                    <b className="leading-3 uppercase tracking-wider font-light">Metamask</b>
                                    <small className="text-xs">Portfolio</small>
                                </span>
                            </a>
                        </div>

                        <hr className="w-full h-px border-0 text-gray-700 z-50" />

                        <div className="overflow-auto p-8 border-b border-gray-700 py-4">
                            <ul className="">
                                {Navigations.map((navItem) => (
                                <li className="px-3 py-4 items-center hover:cursor-pointer hover:text-slate-100 hover:bg-[#415bbc] dark:hover:bg-[#25262b]">
                                    <a href={navItem.path} className="flex items-center space-x-2">
                                        <navItem.icon className={pathname === navItem.path? "w-6 h-6 text-[#415bbc]": "w-6 h-6"} />
                                        <span className={pathname === navItem.path? "text-white": ''}>{navItem.title}</span>
                                    </a>
                                </li>
                                ))}
                            </ul>
                        </div>

                        <hr className="w-full h-px border-0 textr-gray-700 z-50" />

                        <div className="p-8">
                            <ul className="">
                                <li className="darkmode flex justify-between items-center p-3">
                                    <div className="flex items-center space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-gray-500">
                                            <path fill-rule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clip-rule="evenodd" />
                                        </svg>
                                        <span className="">
                                            Dark Mode
                                        </span>
                                    </div>

                                    <DarkmodeToggle />
                                </li>
                                <li className="currency flex justify-between items-center p-3">
                                    <div className="flex items-center space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span className="">
                                            Currency
                                        </span>
                                    </div>
                                    <div className="usd flex items-center space-x-2">
                                        <span className="text-xs">
                                            USD
                                        </span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                        </svg>
                                    </div>
                                </li>
                                <li className="gas flex justify-between items-center p-3">
                                    <div className="flex items-center space-x-2">
                                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="gas-pump" class="w-5 h-5" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M336 448H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h320c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm157.2-340.7l-81-81c-6.2-6.2-16.4-6.2-22.6 0l-11.3 11.3c-6.2 6.2-6.2 16.4 0 22.6L416 97.9V160c0 28.1 20.9 51.3 48 55.2V376c0 13.2-10.8 24-24 24s-24-10.8-24-24v-32c0-48.6-39.4-88-88-88h-8V64c0-35.3-28.7-64-64-64H96C60.7 0 32 28.7 32 64v352h288V304h8c22.1 0 40 17.9 40 40v27.8c0 37.7 27 72 64.5 75.9 43 4.3 79.5-29.5 79.5-71.7V152.6c0-17-6.8-33.3-18.8-45.3zM256 192H96V64h160v128z"></path></svg>
                                        <span className="">
                                            Gas Prices
                                        </span>
                                    </div>

                                    <div className="flex items-center space-x-2">
                                        <span className="text-xs">19WEI</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                        </svg>
                                    </div>
                                </li>
                                <li className="p-3 items-center hover:cursor-pointer hover:text-slate-100 hover:bg-[#415bbc] dark:hover:bg-[#25262b]">
                                    <a href="/settings" className="flex space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        <span className="">Settings</span>
                                    </a>
                                </li>
                                <li className="p-3 items-center hover:cursor-pointer hover:text-slate-100 hover:bg-[#415bbc] dark:hover:bg-[#25262b]">
                                    <a href="/faq" className="flex space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                                        </svg>
                                        <span className="">FAQ</span>
                                    </a>
                                </li>
                                <li className="p-3 hover:cursor-pointer hover:text-slate-100 hover:bg-[#415bbc] dark:hover:bg-[#25262b]">
                                    <a href="" className="flex space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
                                        </svg>
                                        <span className="">Support</span>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <hr className="w-full h-px border-0 text-gray-700 z-50" />

                        <footer className="pt-10 px-8">
                            <span className="flex space-x-2 justify-center items-center py-2">
                                <small className="">Terms of service</small>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                </svg>
                            </span>
                        </footer>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MobileNav