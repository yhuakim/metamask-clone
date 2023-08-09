"use client"

import SearchBar from "../../components/SearchBar";
import { countries } from '../../country'
import PageHeader from "@/components/PageHeader";

export default function BuyCoin() {
    return (
        <main className="h-screen overflow-y-auto bg-slate-300 w-auto lg:p-10 dark:bg-[#101213]">
            <PageHeader title={'Buy'} />
            <section className="text-slate-700 flex flex-col justify-center items-center">
                <div className="md:bg-white dark:md:bg-[#1e1f25] flex flex-col items-center max-w-xl md:border md:border-slate-300 dark:md:border-slate-800 rounded-xl pt-8 border-0">
                    <div className="flex flex-col items-center w-full">
                        <h3 className="text-center font-black text-base dark:text-gray-50">
                            Select Your Region
                        </h3>
                        <p className="text-center text-[11px] text-gray-500 leading-5 md:max-w-md w-full p-4">
                            The payment methods and tokens available to you are determined by our third-party integrations and may vary depending on your region and support by our integrations.
                        </p>
                    </div>

                    <div className="search ">
                        <SearchBar round={false} className="dark:bg-transparent placeholder:italic placeholder:text-slate-400 block bg-white rounded-md w-[25rem] max-w-full border border-slate-500 py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" />
                    </div>

                    <div className="text-gray-500 w-full px-5 py-3">
                        <h4 className="py-3">Regions</h4>
                        <div className="h-96 overflow-y-scroll scrollbar-hide">
                            {
                                countries.map((item, index) => (
                                    <p className="text-gray-700 text-sm dark:text-gray-50 p-4" key={index}>
                                        {item.name}
                                    </p>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}