"use client"
import { useState, useEffect } from "react"
import { useTheme } from 'next-themes'
//how to toggle theme?

const DarkmodeToggle = () => {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    // useEffect only runs on the client, so now we can safely show the UI
    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    const toggleTheme = () => {
        if (theme === 'dark') {
            setTheme('light')
            console.log(theme);
        } else {
            setTheme('dark')
            console.log(theme);
        }
    }


    return (
        <button
            class="w-10 h-5 rounded-full bg-gray-300 dark:bg-white flex items-center transition duration-300 focus:outline-none shadow"
            onClick={toggleTheme}>
            <div
                id="switch-toggle"
                className={theme === "light" ? "w-6 h-6 relative rounded-full transition duration-500 transform -translate-x-2 bg-[#415bbc] p-1 text-white" : "w-6 h-6 relative rounded-full transition duration-500 transform bg-[#415bbc] translate-x-full p-1 text-white"}>
                {
                    theme === "light" ? (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>

                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path fill-rule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clip-rule="evenodd" />
                        </svg>


                    )
                }
            </div>
        </button>
    )
}
export default DarkmodeToggle