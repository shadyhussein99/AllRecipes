// The component used to structure the page shown on clicking on one of the latest recipes (Recipe Description)

import React from "react";

function MiniRecipesDescription(props) {
    return <div className="mx-7">
        <h1 className="text-4xl font-bold ">{props.heading}</h1>

        <p className="mt-14">{props.description}</p>

        <img className="mt-12" src={props.image} alt="recipe-img" />

        <h2 className="mt-24 text-3xl font-bold">Ingredients</h2>

        <ul className="mt-12">
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

        <h2 className="mt-24 text-3xl font-bold mb-10">Directions</h2>

        <div>
            <p className="description-step">Step 1</p>
            <p className="step-paragraph">{props.step1}</p>
        </div>

        <div>
            <p className="description-step">Step 2</p>
            <p className="step-paragraph">{props.step2}</p>
        </div>

        <div>
            <p className="description-step">Step 3</p>
            <p className="step-paragraph">{props.step3}</p>
        </div>

        <div>
            <p className="description-step">Step 4</p>
            <p className="step-paragraph">{props.step4}</p>
        </div>

    </div>
}

export default MiniRecipesDescription