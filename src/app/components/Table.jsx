
"use client"

import { useEffect, useState } from "react";
import getDoument from "../firestore/getDoc";

const Table = () => {

    const [document, setDocument] = useState()

    useEffect(() => {
        async function fetchData() {
            try {
                const { data, error } = await getDoument()
                setDocument(data)
                console.log(data);
            } catch (error) {
                console.error(error.message)
            }
        }
        fetchData()
    }, [])

    return (
        <div className="z-[0]">
            <table className="w-full text-left text-xs">
                <thead className="text-xs text-gray-400 border-b border-gray-700">
                    <tr>
                        <th scope="col" className="px-6 py-3 w-96">
                            Token
                        </th>
                        <th scope="col" className="hidden md:block md:px-6 md:py-3 md:flex md:space-x-2">
                            <span className="">
                                Portfolio %
                            </span>
                            <div className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
                                    <path fillRule="evenodd" d="M11.47 4.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 01-1.06 1.06L12 6.31 8.78 9.53a.75.75 0 01-1.06-1.06l3.75-3.75zm-3.75 9.75a.75.75 0 011.06 0L12 17.69l3.22-3.22a.75.75 0 111.06 1.06l-3.75 3.75a.75.75 0 01-1.06 0l-3.75-3.75a.75.75 0 010-1.06z" clipRule="evenodd" />
                                </svg>
                            </div>
                        </th>
                        <th scope="col" className="hidden md:block md:px-6 md:py-3">
                            Price
                        </th>
                        <th scope="col" className="md:px-6 md:py-3">
                            Balance
                        </th>
                    </tr>
                </thead>
                {document ? document.map((doc, index) => (
                    <tbody key={index} className="">
                        <tr className="border-b border-gray-700 w-full">
                            <th scope="row" className="px-6 py-2 font-medium flex flex-col w-48">
                                <b className="uppercase">{doc.shortname}</b>
                                <small className="text-gray-400">{doc.fullname}</small>
                            </th>
                            <td className="hidden md:block px-6 py-2 w-48">
                                {doc.percentage}
                            </td>
                            <td className="hidden md:block px-6 py-2 w-48">
                                <p className="">{doc.price[0]}</p>
                                <small className="text-red-500">{doc.price[1]}</small>
                            </td>
                            <td className="px-6 py-2 w-48">
                                <p className="">{doc.balance[0]}</p>
                                <small className="text-gray-400">{doc.balance[1]}</small>
                            </td>
                        </tr>
                    </tbody>
                )) : "loading..."}
            </table>
        </div>
    );
}

export default Table