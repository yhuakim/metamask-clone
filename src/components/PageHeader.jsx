import SearchBar from "./SearchBar"
import Currency from "./Currency"
import GasPrice from "./GasPrice"

const PageHeader = ({ title }) => {
    return (
        <>
            <header className="w-screen md:w-auto text-slate-700 border-b border-slate-500 py-5 px-10 lg:flex lg:justify-between lg:items-center lg:mb-5 md:border-0 dark:text-gray-300">
                <h1 className="dashboard text-3xl">
                    {title}
                </h1>
                <div className="hidden lg:items-center lg:flex space-x-5">

                    <SearchBar className={"placeholder:italic placeholder:text-slate-400 block rounded-full bg-white dark:bg-transparent w-full border border-slate-300 dark:border-slate-800 py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"} />

                    {/* <Currencies /> */}

                    <Currency />

                    <GasPrice />

                </div>
            </header>
        </>
    )
}

export default PageHeader