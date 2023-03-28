// The page appears with the recipes when the user selects a ccountry

import React from "react";

function CountryRecipes() {
    return resultRecipes.map((value) => {<div>
        <img src={value.strMealThumb} alt="recipe-pic" />
        <p>{value.strMeal}</p>
    </div>})
}

export default CountryRecipes