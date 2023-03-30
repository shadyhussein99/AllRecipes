// Component of the latest recipes section in the home page

import React from "react";
import MiniLatestRecipes from "./MiniLatestRecipes";


function LatestRecipes() {

    return <div className="">

        <div className="flex justify-center">
            <h2 className=" inline-block mt-32 text-orange-600 text-3xl font-bold border-b-2 border-black">Our Latest Recipes</h2>
        </div>

        <div className="mt-20">
            <MiniLatestRecipes
                image="/pics/latestRecipes/firstLatest.PNG"
                heading="ICE CREAM"
                description="Carrot Cake Ice Cream"
                reference="/first-recipe-description"
            />

            <MiniLatestRecipes
                image="/pics/latestRecipes/secondLatest.PNG"
                heading="SHRIMP"
                description="Spicy Baked Shrimp"
                reference="/second-recipe-description"
            />

            <MiniLatestRecipes
                image="/pics/latestRecipes/thirdLatest.PNG"
                heading="RICE BOWL"
                description="Easy Korean Ground Beef Bowl"
                reference="/third-recipe-description"
            />

            <MiniLatestRecipes
                image="/pics/latestRecipes/fourthLatest.PNG"
                heading="BREAKFAST CASSEROLE RECIPES"
                description="Peanut Butter and Jelly French Toast Casserole"
                reference="/fourth-recipe-description"
            />

            <MiniLatestRecipes
                image="/pics/latestRecipes/fifthLatest.PNG"
                heading="TACO RECIPES"
                description="Salmon Tacos with Mango Salsa"
                reference="/fifth-recipe-description"
            />

            <MiniLatestRecipes
                image="/pics/latestRecipes/sixthLatest.PNG"
                heading="MAIN DISH"
                description="Gochujang Noodles"
                reference="/sixth-recipe-description"
            />
        </div>
    </div>
}

export default LatestRecipes