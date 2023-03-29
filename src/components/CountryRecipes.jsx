// The page appears with the recipes when the user selects a ccountry

import React from "react";
import { useSelector } from "react-redux";

function CountryRecipes() {

    const countryRecipes = useSelector((state) => state.countryRecipes.value)

    return countryRecipes.map((value) => {
        <div>
            <img src={value.strMealThumb} alt="recipe-pic" />
            <p>{value.strMeal}</p>
        </div>
    })
}

export default CountryRecipes


