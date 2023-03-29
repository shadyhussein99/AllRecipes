// Section where the user selects a country in the home page

import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchCountryRecipes } from "../redux/countryRecipesSlice"

function Countries() {

    const dispatch = useDispatch()

    var [countryChosen, setCountryChosen] = useState("")      // State of the country chosen by the user and used in the API to get data

    useEffect(() => {
        dispatch(fetchCountryRecipes(countryChosen))
    }, [dispatch])

    return <div>

        <h2>Browse Country</h2>

        <Link to="/country-recipes">
            <img
                onClick={() => { setCountryChosen("american") }}
                className="flag"
                src="/pics/american.PNG" alt="country-flag" />
        </Link>

        <Link to="/country-recipes">
            <img
                onClick={() => { setCountryChosen("british") }}
                className="flag"
                src="/pics/british.PNG" alt="country-flag" />
        </Link>

        <img
            onClick={() => { setCountryChosen("canadian") }}
            className="flag"
            src="/pics/canadian.PNG" alt="country-flag" />

        <img
            onClick={() => { setCountryChosen("chinese") }}
            className="flag"
            src="/pics/chinese.PNG" alt="country-flag" />

        <img
            onClick={() => { setCountryChosen("croatian") }}
            className="flag"
            src="/pics/croatian.PNG" alt="country-flag" />

        <img
            onClick={() => { setCountryChosen("dutch") }}
            className="flag"
            src="/pics/dutch.PNG" alt="country-flag" />

        <img
            onClick={() => { setCountryChosen("egyptian"), dispatch(fetchCountryRecipes(countryChosen)) }}
            className="flag"
            src="/pics/egyptian.PNG" alt="country-flag" />

        <img
            onClick={() => { setCountryChosen("french") }}
            className="flag"
            src="/pics/french.PNG" alt="country-flag" />

        <img
            onClick={() => { setCountryChosen("greek") }}
            className="flag"
            src="/pics/greek.PNG" alt="country-flag" />

        <img
            onClick={() => { setCountryChosen("indian") }}
            className="flag"
            src="/pics/indian.PNG" alt="country-flag" />

        <img
            onClick={() => { setCountryChosen("irish") }}
            className="flag"
            src="/pics/irish.PNG" alt="country-flag" />

        <img
            onClick={() => { setCountryChosen("italian") }}
            className="flag"
            src="/pics/italian.PNG" alt="country-flag" />

        <img
            onClick={() => { setCountryChosen("jamaican") }}
            className="flag"
            src="/pics/jamaican.PNG" alt="country-flag" />

        <img
            onClick={() => { setCountryChosen("japanese") }}
            className="flag"
            src="/pics/japanese.PNG" alt="country-flag" />

        <img
            onClick={() => { setCountryChosen("kenyan") }}
            className="flag"
            src="/pics/kenyan.PNG" alt="country-flag" />

        <img
            onClick={() => { setCountryChosen("malaysian") }}
            className="flag"
            src="/pics/malaysian.PNG" alt="country-flag" />

        <img
            onClick={() => { setCountryChosen("mexican") }}
            className="flag"
            src="/pics/mexican.PNG" alt="country-flag" />

        <img
            onClick={() => { setCountryChosen("moroccan") }}
            className="flag"
            src="/pics/moroccan.PNG" alt="country-flag" />

        <img
            onClick={() => { setCountryChosen("polish") }}
            className="flag"
            src="/pics/polish.PNG" alt="country-flag" />

        <img
            onClick={() => { setCountryChosen("portuguese") }}
            className="flag"
            src="/pics/portuguese.PNG" alt="country-flag" />

        <img
            onClick={() => { setCountryChosen("russian") }}
            className="flag"
            src="/pics/russian.PNG" alt="country-flag" />

        <img
            onClick={() => { setCountryChosen("spanish") }}
            className="flag"
            src="/pics/spanish.PNG" alt="country-flag" />

        <img
            onClick={() => { setCountryChosen("thai") }}
            className="flag"
            src="/pics/thai.PNG" alt="country-flag" />

        <img
            onClick={() => { setCountryChosen("tunisian") }}
            className="flag"
            src="/pics/tunisian.PNG" alt="country-flag" />

        <img
            onClick={() => { setCountryChosen("turkish") }}
            className="flag"
            src="/pics/turkish.PNG" alt="country-flag" />

    </div>
}

export default Countries