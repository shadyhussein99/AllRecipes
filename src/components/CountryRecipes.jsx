// The page appears with the recipes when the user selects a ccountry

import React from "react";
import { useSelector } from "react-redux";

function CountryRecipes() {

    const countryRecipes = useSelector((state) => state.countryRecipes.value)

    return <div>
        {countryRecipes && countryRecipes.map((value) => {
            <div>
                <img src={value.strMealThumb} alt="recipe-pic" />
                <p>{value.strMeal}hjkhh</p>
            </div>
        })}
    </div>
}

export default CountryRecipes


