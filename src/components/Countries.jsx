// Section where the user selects a country in the home page

import React from "react";
import { useState, useEffect } from "react";

function Countries(props) {

    const [countryChosen, setCountryChosen] = useState("")      // State of the country chosen by the user and used in the API to get data

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${countryChosen}`)
            .then((res) => res.json())
            .then((res) => {
                const { meals } = res
                props.setResultRecipes(meals)
            })
    }
        , [countryChosen]
    )

    return <section className="bg-gray-100">

        <section className="flex items-end justify-center">
            <section className="flex justify-center">
                <h2 className=" inline-block mt-24 text-3xl font-bold">Browse Country</h2>
            </section>

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-3 text-orange-600">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
        </section>


        <section className="flex justify-center pb-16 lg:pb-28">
            <section className="mt-16 grid grid-cols-5 justify-center md:grid-cols-7">
                <img
                    onClick={() => { setCountryChosen("american") }}
                    className="flag"
                    src="/pics/countries/american.PNG" alt="country-flag" />

                <img
                    onClick={() => { setCountryChosen("british") }}
                    className="flag"
                    src="/pics/countries/british.PNG" alt="country-flag" />

                <img
                    onClick={() => { setCountryChosen("canadian") }}
                    className="flag"
                    src="/pics/countries/canadian.PNG" alt="country-flag" />

                <img
                    onClick={() => { setCountryChosen("chinese") }}
                    className="flag"
                    src="/pics/countries/chinese.PNG" alt="country-flag" />

                <img
                    onClick={() => { setCountryChosen("croatian") }}
                    className="flag"
                    src="/pics/countries/croatian.PNG" alt="country-flag" />

                <img
                    onClick={() => { setCountryChosen("dutch") }}
                    className="flag"
                    src="/pics/countries/dutch.PNG" alt="country-flag" />

                <img
                    onClick={() => { setCountryChosen("egyptian") }}
                    className="flag"
                    src="/pics/countries/egyptian.PNG" alt="country-flag" />

                <img
                    onClick={() => { setCountryChosen("french") }}
                    className="flag"
                    src="/pics/countries/french.PNG" alt="country-flag" />

                <img
                    onClick={() => { setCountryChosen("greek") }}
                    className="flag"
                    src="/pics/countries/greek.PNG" alt="country-flag" />

                <img
                    onClick={() => { setCountryChosen("indian") }}
                    className="flag"
                    src="/pics/countries/indian.PNG" alt="country-flag" />

                <img
                    onClick={() => { setCountryChosen("irish") }}
                    className="flag"
                    src="/pics/countries/irish.PNG" alt="country-flag" />

                <img
                    onClick={() => { setCountryChosen("italian") }}
                    className="flag"
                    src="/pics/countries/italian.PNG" alt="country-flag" />

                <img
                    onClick={() => { setCountryChosen("jamaican") }}
                    className="flag"
                    src="/pics/countries/jamaican.PNG" alt="country-flag" />

                <img
                    onClick={() => { setCountryChosen("japanese") }}
                    className="flag"
                    src="/pics/countries/japanese.PNG" alt="country-flag" />

                <img
                    onClick={() => { setCountryChosen("kenyan") }}
                    className="flag"
                    src="/pics/countries/kenyan.PNG" alt="country-flag" />

                <img
                    onClick={() => { setCountryChosen("malaysian") }}
                    className="flag"
                    src="/pics/countries/malaysian.PNG" alt="country-flag" />

                <img
                    onClick={() => { setCountryChosen("mexican") }}
                    className="flag"
                    src="/pics/countries/mexican.PNG" alt="country-flag" />

                <img
                    onClick={() => { setCountryChosen("moroccan") }}
                    className="flag"
                    src="/pics/countries/moroccan.PNG" alt="country-flag" />

                <img
                    onClick={() => { setCountryChosen("polish") }}
                    className="flag"
                    src="/pics/countries/polish.PNG" alt="country-flag" />

                <img
                    onClick={() => { setCountryChosen("portuguese") }}
                    className="flag"
                    src="/pics/countries/portuguese.PNG" alt="country-flag" />

                <img
                    onClick={() => { setCountryChosen("russian") }}
                    className="flag"
                    src="/pics/countries/russian.PNG" alt="country-flag" />

                <img
                    onClick={() => { setCountryChosen("spanish") }}
                    className="flag"
                    src="/pics/countries/spanish.PNG" alt="country-flag" />

                <img
                    onClick={() => { setCountryChosen("thai") }}
                    className="flag"
                    src="/pics/countries/thai.PNG" alt="country-flag" />

                <img
                    onClick={() => { setCountryChosen("tunisian") }}
                    className="flag"
                    src="/pics/countries/tunisian.PNG" alt="country-flag" />

                <img
                    onClick={() => { setCountryChosen("turkish") }}
                    className="flag"
                    src="/pics/countries/turkish.PNG" alt="country-flag" />
            </section>
        </section>

    </section>
}

export default Countries