// The section that appears when the user selects a country

import React from "react";

function CountryRecipes(props) {
    return <div>
        <img src={props.recipeImage} alt="recipe-pic" />
        <p>{props.recipeName}</p>
    </div>
}

export default CountryRecipes