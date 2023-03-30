// The section that appears when the user selects a country

import React from "react";

function CountryRecipes(props) {
    return <div className="grid grid-cols-3 mb-8">

        <div className="col-span-1 w-32 ml-auto">
            <img src={props.recipeImage} alt="recipe-pic" />
        </div>

        <div className="col-span-2 ml-6 flex items-center text-xl font-bold mr-8">
            <p>{props.recipeName}</p>
        </div>

    </div>
}

export default CountryRecipes