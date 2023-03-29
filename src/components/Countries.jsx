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

    return <div>

        <h2>Browse Country</h2>

        <img
            onClick={() => { setCountryChosen("american"), props.setCountryRecipesShown(true) }}
            className="flag"
            src="/pics/countries/american.PNG" alt="country-flag" />

        <img
            onClick={() => { setCountryChosen("british"), props.setCountryRecipesShown(true) }}
            className="flag"
            src="/pics/countries/british.PNG" alt="country-flag" />

        <img
            onClick={() => { setCountryChosen("canadian"), props.setCountryRecipesShown(true) }}
            className="flag"
            src="/pics/countries/canadian.PNG" alt="country-flag" />

        <img
            onClick={() => { setCountryChosen("chinese"), props.setCountryRecipesShown(true) }}
            className="flag"
            src="/pics/countries/chinese.PNG" alt="country-flag" />

        <img
            onClick={() => { setCountryChosen("croatian"), props.setCountryRecipesShown(true) }}
            className="flag"
            src="/pics/countries/croatian.PNG" alt="country-flag" />

        <img
            onClick={() => { setCountryChosen("dutch"), props.setCountryRecipesShown(true) }}
            className="flag"
            src="/pics/countries/dutch.PNG" alt="country-flag" />

        <img
            onClick={() => { setCountryChosen("egyptian"), props.setCountryRecipesShown(true) }}
            className="flag"
            src="/pics/countries/egyptian.PNG" alt="country-flag" />

        <img
            onClick={() => { setCountryChosen("french"), props.setCountryRecipesShown(true) }}
            className="flag"
            src="/pics/countries/french.PNG" alt="country-flag" />

        <img
            onClick={() => { setCountryChosen("greek"), props.setCountryRecipesShown(true) }}
            className="flag"
            src="/pics/countries/greek.PNG" alt="country-flag" />

        <img
            onClick={() => { setCountryChosen("indian"), props.setCountryRecipesShown(true) }}
            className="flag"
            src="/pics/countries/indian.PNG" alt="country-flag" />

        <img
            onClick={() => { setCountryChosen("irish"), props.setCountryRecipesShown(true) }}
            className="flag"
            src="/pics/countries/irish.PNG" alt="country-flag" />

        <img
            onClick={() => { setCountryChosen("italian"), props.setCountryRecipesShown(true) }}
            className="flag"
            src="/pics/countries/italian.PNG" alt="country-flag" />

        <img
            onClick={() => { setCountryChosen("jamaican"), props.setCountryRecipesShown(true) }}
            className="flag"
            src="/pics/countries/jamaican.PNG" alt="country-flag" />

        <img
            onClick={() => { setCountryChosen("japanese"), props.setCountryRecipesShown(true) }}
            className="flag"
            src="/pics/countries/japanese.PNG" alt="country-flag" />

        <img
            onClick={() => { setCountryChosen("kenyan"), props.setCountryRecipesShown(true) }}
            className="flag"
            src="/pics/countries/kenyan.PNG" alt="country-flag" />

        <img
            onClick={() => { setCountryChosen("malaysian"), props.setCountryRecipesShown(true) }}
            className="flag"
            src="/pics/countries/malaysian.PNG" alt="country-flag" />

        <img
            onClick={() => { setCountryChosen("mexican"), props.setCountryRecipesShown(true) }}
            className="flag"
            src="/pics/countries/mexican.PNG" alt="country-flag" />

        <img
            onClick={() => { setCountryChosen("moroccan"), props.setCountryRecipesShown(true) }}
            className="flag"
            src="/pics/countries/moroccan.PNG" alt="country-flag" />

        <img
            onClick={() => { setCountryChosen("polish"), props.setCountryRecipesShown(true) }}
            className="flag"
            src="/pics/countries/polish.PNG" alt="country-flag" />

        <img
            onClick={() => { setCountryChosen("portuguese"), props.setCountryRecipesShown(true) }}
            className="flag"
            src="/pics/countries/portuguese.PNG" alt="country-flag" />

        <img
            onClick={() => { setCountryChosen("russian"), props.setCountryRecipesShown(true) }}
            className="flag"
            src="/pics/countries/russian.PNG" alt="country-flag" />

        <img
            onClick={() => { setCountryChosen("spanish"), props.setCountryRecipesShown(true) }}
            className="flag"
            src="/pics/countries/spanish.PNG" alt="country-flag" />

        <img
            onClick={() => { setCountryChosen("thai"), props.setCountryRecipesShown(true) }}
            className="flag"
            src="/pics/countries/thai.PNG" alt="country-flag" />

        <img
            onClick={() => { setCountryChosen("tunisian"), props.setCountryRecipesShown(true) }}
            className="flag"
            src="/pics/countries/tunisian.PNG" alt="country-flag" />

        <img
            onClick={() => { setCountryChosen("turkish"), props.setCountryRecipesShown(true) }}
            className="flag"
            src="/pics/countries/turkish.PNG" alt="country-flag" />

    </div>
}

export default Countries