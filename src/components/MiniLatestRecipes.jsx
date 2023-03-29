// Component used to structure Latest Recipes section in the home page

import React from "react";
import { Link } from "react-router-dom";

function MiniLatestRecipes(props) {
    return <Link to={props.reference}>
        <div>

            <img src={props.image} alt="recipe-img" />
            <p>{props.heading}</p>
            <h2>{props.description}</h2>

        </div>
    </Link>
}

export default MiniLatestRecipes