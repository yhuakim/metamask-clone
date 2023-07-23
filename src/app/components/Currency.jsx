"use client"

import { countries } from 'countries-list'

const Currency = () => {

    return (
        <>
            <label htmlFor="currencyOptions">
                <select name="currencyOptions" id="currencyOptions" className='rounded-full space-x-2 px-2'>

                    <option value={countries.CY} selected>
                        <span className="">{countries.CY.emoji}</span>
                        <span className="">{countries.CY.currency}</span>
                    </option>
                    <option value={countries.GB}>
                        <span className="">{countries.GB.emoji}</span>
                        <span className="">{countries.GB.currency}</span>
                    </option>
                    <option value={countries.DE}>
                        <span className="">{countries.DE.emoji}</span>
                        <span className="">{countries.DE.currency}</span>
                    </option>
                    <option value={countries.JP}>
                        <span className="">{countries.JP.emoji}</span>
                        <span className="">{countries.JP.currency}</span>
                    </option>
                </select>
            </label>
        </>
    )
}

export default Currency