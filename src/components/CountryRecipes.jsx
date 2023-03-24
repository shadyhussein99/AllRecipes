// The page appears with the recipes when the user selects a ccountry

import React from "react";

function CountryRecipes(props) {
    return <div>
        <img src={props.recipeImage} alt="recipe-pic" />
        <p>{props.recipeName}</p>
    </div>
}

export default CountryRecipes