// Component of the latest recipes section in the home page

import React from "react";
import MiniLatestRecipes from "./MiniLatestRecipes";


function LatestRecipes() {

    return <div>

            <MiniLatestRecipes
                image="/pics/latestRecipes/firstLatest.PNG"
                heading="ICE CREAM"
                description="Carrot Cake Ice Cream"
                reference="/first-recipe-description"
            />

            <MiniLatestRecipes />

            <MiniLatestRecipes />

            <MiniLatestRecipes />

            <MiniLatestRecipes />

            <MiniLatestRecipes />

    </div>
}

export default LatestRecipes