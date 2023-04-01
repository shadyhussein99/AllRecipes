// Component used to structure Latest Recipes section in the home page

import React from "react";
import { Link } from "react-router-dom";

function MiniLatestRecipes(props) {
    return <Link to={props.reference}>
    <div className="">
        <div className="mx-5 mb-14 lg:mx-7 xl:mx-10">

            <img className="rounded-md w-full" src={props.image} alt="recipe-img" />
            <p className="text-gray-600 font-semibold mt-4">{props.heading}</p>
            <h2 className=" text-black text-3xl font-bold pt-2 sm:text-2xl">{props.description}</h2>

        </div>
        </div>
    </Link>
}

export default MiniLatestRecipes