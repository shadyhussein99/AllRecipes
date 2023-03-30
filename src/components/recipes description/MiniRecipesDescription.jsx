// The component used to structure the page shown on clicking on one of the latest recipes (Recipe Description)

import React from "react";

function MiniRecipesDescription(props) {
    return <div>
        <h1>{props.heading}</h1>

        <p>{props.description}</p>

        <img src={props.image} alt="recipe-img" />

        <h2>Ingredients</h2>

        <ul>
            <li>{props.list1}</li>
            <li>{props.list2}</li>
            <li>{props.list3}</li>
            <li>{props.list4}</li>
            <li>{props.list5}</li>
            <li>{props.list6}</li>
            <li>{props.list7}</li>
            <li>{props.list8}</li>
            <li>{props.list9}</li>
            <li>{props.list10}</li>
        </ul>

        <h2>Directions</h2>

        <div>
            <p>Step 1</p>
            <p>{props.step1}</p>
        </div>

        <div>
            <p>Step 2</p>
            <p>{props.step2}</p>
        </div>

        <div>
            <p>Step 3</p>
            <p>{props.step3}</p>
        </div>

        <div>
            <p>Step 4</p>
            <p>{props.step4}</p>
        </div>

    </div>
}

export default MiniRecipesDescription