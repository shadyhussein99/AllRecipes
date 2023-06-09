// The section that appears when the user selects a country

import React from "react";

function CountryRecipes(props) {
    return <section className="grid grid-cols-3 my-8">

        <section className="col-span-1 w-32 ml-auto lg:w-40 lg:relative lg:left-10 xl:relative xl:left-28">
            <img src={props.recipeImage} alt="recipe-pic" />
        </section>

        <section className="col-span-2 ml-6 flex items-center font-bold mr-8 lg:ml-16 xl:ml-36">
            <p className="text-xl lg:text-2xl">{props.recipeName}</p>
        </section>

    </section>
}

export default CountryRecipes