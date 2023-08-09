'use client'

import { usePathname } from "next/navigation";
import DarkmodeToggle from "./DarkmodeToggle";
import { useEffect, useState } from 'react'
import { Navigations } from "./Data";

const Drawer = () => {
    const [show, setShow] = useState(true)
    const toggleDrawer = () => {
        setShow(!show);
    }
    const pathname = usePathname()
    
    return (
        <aside className="relative group/toggle">
            <button onClick={toggleDrawer} className=" absolute hidden rounded-full p-1 -right-2 top-10 shadow-md group-hover/toggle:block z-20 hover:bg-[#526ed6] hover:text-white hover:cursor-pointer">
                <a className="">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="w-2.5 h-2.5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                </a>
            </button>
            <div className={show ? "min-h-screen text-base w-40 flex flex-col justify-between mx-auto h-screen overflow-y-auto scrollbar-hide bg-white dark:bg-[#1e1f25]" : "w-20"}>
                <div className="branding pt-10 mx-auto">
                    <a href="/" className="flex space-x-2">
                        <img src="/metamask.svg" className="w-[2rem]" />
                        <span className={show ? "flex flex-col" : "hidden"}>
                            <b className="leading-3 uppercase tracking-tight font-light">Metamask</b>
                            <small className="text-xs">Portfolio</small>
                        </span>
                    </a>
                </div>

                <div className="h-56 overflow-auto">
                    <ul className="">
                        {Navigations.map((navItem) => 
                        (<li className={pathname === navItem.path? "p-3 items-center hover:cursor-pointer dark:hover:bg-[#25262b] border-r-4 border-[#415bbc] group": "p-3 items-center hover:bg-[#415bbc] hover:cursor-pointer dark:hover:bg-[#25262b] group"}>
                            <a href={navItem.path} className={pathname === navItem.path? "flex items-center space-x-2": "flex items-center space-x-2  group-hover:text-gray-100"}>
                                <navItem.icon className={pathname === navItem.path? "w-6 h-6 text-[#415bbc]" : "w-6 h-6"}/>
                                <span className={show ? "" : "hidden"}>{navItem.title}</span>
                            </a>
                        </li>)
                        )}
                    </ul>
                </div>

                <div className="">
                    <ul className="">
                        <li className="p-3 items-center hover:cursor-pointer dark:hover:bg-[#25262b] hover:bg-[#415bbc] group">
                            <a href="/settings" className="flex space-x-2 group-hover:text-gray-200">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span className={show ? "" : "hidden"}>Settings</span>
                            </a>
                        </li>
                        <li className="p-3 items-center hover:cursor-pointer dark:hover:bg-[#25262b] hover:bg-[#415bbc] group">
                            <a href="/faq" className="flex space-x-2 group-hover:text-gray-200">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                                </svg>
                                <span className={show ? '' : 'hidden'}>FAQ</span>
                            </a>
                        </li>
                        <li className="p-3 hover:cursor-pointer dark:hover:bg-[#25262b] hover:bg-[#415bbc] group">
                            <a href="" className="flex space-x-2 group-hover:text-gray-200">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
                                </svg>
                                <span className="">Support</span>
                            </a>
                        </li>
                        <div className="px-6 py-3">
                            <DarkmodeToggle />
                        </div>
                    </ul>
                </div>

                <footer className="pt-10">
                    <hr />
                    <span className="flex space-x-2 justify-center items-center py-2">
                        <small className="">Terms of service</small>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                        </svg>
                    </span>
                </footer>
            </div>
        </aside>
    );
}
export default Drawer