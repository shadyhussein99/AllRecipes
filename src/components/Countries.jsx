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
            src="/pics/american.PNG" alt="country-flag" />

        <img
            onClick={() => { setCountryChosen("british"), props.setCountryRecipesShown(true) }}
            className="flag"
            src="/pics/british.PNG" alt="country-flag" />

        <img
            onClick={() => { setCountryChosen("canadian"), props.setCountryRecipesShown(true) }}
            className="flag"
            src="/pics/canadian.PNG" alt="country-flag" />

        <img
            onClick={() => { setCountryChosen("chinese"), props.setCountryRecipesShown(true) }}
            className="flag"
            src="/pics/chinese.PNG" alt="country-flag" />

        <img
            onClick={() => { setCountryChosen("croatian"), props.setCountryRecipesShown(true) }}
            className="flag"
            src="/pics/croatian.PNG" alt="country-flag" />

        <img
            onClick={() => { setCountryChosen("dutch"), props.setCountryRecipesShown(true) }}
            className="flag"
            src="/pics/dutch.PNG" alt="country-flag" />

        <img
            onClick={() => { setCountryChosen("egyptian"), props.setCountryRecipesShown(true) }}
            className="flag"
            src="/pics/egyptian.PNG" alt="country-flag" />

        <img
            onClick={() => { setCountryChosen("french"), props.setCountryRecipesShown(true) }}
            className="flag"
            src="/pics/french.PNG" alt="country-flag" />

        <img
            onClick={() => { setCountryChosen("greek"), props.setCountryRecipesShown(true) }}
            className="flag"
            src="/pics/greek.PNG" alt="country-flag" />

        <img
            onClick={() => { setCountryChosen("indian"), props.setCountryRecipesShown(true) }}
            className="flag"
            src="/pics/indian.PNG" alt="country-flag" />

        <img
            onClick={() => { setCountryChosen("irish"), props.setCountryRecipesShown(true) }}
            className="flag"
            src="/pics/irish.PNG" alt="country-flag" />

        <img
            onClick={() => { setCountryChosen("italian"), props.setCountryRecipesShown(true) }}
            className="flag"
            src="/pics/italian.PNG" alt="country-flag" />

        <img
            onClick={() => { setCountryChosen("jamaican"), props.setCountryRecipesShown(true) }}
            className="flag"
            src="/pics/jamaican.PNG" alt="country-flag" />

        <img
            onClick={() => { setCountryChosen("japanese"), props.setCountryRecipesShown(true) }}
            className="flag"
            src="/pics/japanese.PNG" alt="country-flag" />

        <img
            onClick={() => { setCountryChosen("kenyan"), props.setCountryRecipesShown(true) }}
            className="flag"
            src="/pics/kenyan.PNG" alt="country-flag" />

        <img
            onClick={() => { setCountryChosen("malaysian"), props.setCountryRecipesShown(true) }}
            className="flag"
            src="/pics/malaysian.PNG" alt="country-flag" />

        <img
            onClick={() => { setCountryChosen("mexican"), props.setCountryRecipesShown(true) }}
            className="flag"
            src="/pics/mexican.PNG" alt="country-flag" />

        <img
            onClick={() => { setCountryChosen("moroccan"), props.setCountryRecipesShown(true) }}
            className="flag"
            src="/pics/moroccan.PNG" alt="country-flag" />

        <img
            onClick={() => { setCountryChosen("polish"), props.setCountryRecipesShown(true) }}
            className="flag"
            src="/pics/polish.PNG" alt="country-flag" />

        <img
            onClick={() => { setCountryChosen("portuguese"), props.setCountryRecipesShown(true) }}
            className="flag"
            src="/pics/portuguese.PNG" alt="country-flag" />

        <img
            onClick={() => { setCountryChosen("russian"), props.setCountryRecipesShown(true) }}
            className="flag"
            src="/pics/russian.PNG" alt="country-flag" />

        <img
            onClick={() => { setCountryChosen("spanish"), props.setCountryRecipesShown(true) }}
            className="flag"
            src="/pics/spanish.PNG" alt="country-flag" />

        <img
            onClick={() => { setCountryChosen("thai"), props.setCountryRecipesShown(true) }}
            className="flag"
            src="/pics/thai.PNG" alt="country-flag" />

        <img
            onClick={() => { setCountryChosen("tunisian"), props.setCountryRecipesShown(true) }}
            className="flag"
            src="/pics/tunisian.PNG" alt="country-flag" />

        <img
            onClick={() => { setCountryChosen("turkish"), props.setCountryRecipesShown(true) }}
            className="flag"
            src="/pics/turkish.PNG" alt="country-flag" />

    </div>
}

export default Countries