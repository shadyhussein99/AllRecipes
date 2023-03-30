// Component of the latest recipes section in the home page

import React from "react";
import MiniLatestRecipes from "./MiniLatestRecipes";


function LatestRecipes() {

    return <div id="latestRecipes" className="bg-gray-100">

        <div className="flex items-end justify-center">
            <div className="flex justify-center">
                <h2 className=" inline-block pt-32 text-3xl font-bold ">Our Latest Recipes</h2>
            </div>

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-3 text-orange-600">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
        </div>

        <div className="mt-20 sm:grid sm:grid-cols-2 sm:mx-6 md:mx-12 lg:grid-cols-3 xl:mx-32">

            <div className="col-span-1">
                <MiniLatestRecipes
                    image="/pics/latestRecipes/firstLatest.PNG"
                    heading="ICE CREAM"
                    description="Carrot Cake Ice Cream"
                    reference="/first-recipe-description"
                />
            </div>

            <div className="col-span-1">
                <MiniLatestRecipes
                    image="/pics/latestRecipes/secondLatest.PNG"
                    heading="SHRIMP"
                    description="Spicy Baked Shrimp"
                    reference="/second-recipe-description"
                />
            </div>

            <div className="col-span-1">
                <MiniLatestRecipes
                    image="/pics/latestRecipes/thirdLatest.PNG"
                    heading="RICE BOWL"
                    description="Easy Korean Ground Beef Bowl"
                    reference="/third-recipe-description"
                />
            </div>

            <div className="col-span-1">
                <MiniLatestRecipes
                    image="/pics/latestRecipes/fourthLatest.PNG"
                    heading="BREAKFAST CASSEROLE RECIPES"
                    description="Peanut Butter and Jelly French Toast Casserole"
                    reference="/fourth-recipe-description"
                />
            </div>

            <div className="col-span-1">
                <MiniLatestRecipes
                    image="/pics/latestRecipes/fifthLatest.PNG"
                    heading="TACO RECIPES"
                    description="Salmon Tacos with Mango Salsa"
                    reference="/fifth-recipe-description"
                />
            </div>

            <div className="col-span-1">
                <MiniLatestRecipes
                    image="/pics/latestRecipes/sixthLatest.PNG"
                    heading="MAIN DISH"
                    description="Gochujang Noodles"
                    reference="/sixth-recipe-description"
                />
            </div>
        </div>
    </div>
}

export default LatestRecipes