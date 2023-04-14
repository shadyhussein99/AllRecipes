// The component used to structure the page shown on clicking on one of the latest recipes (Recipe Description)

import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

function MiniRecipesDescription(props) {
    return <section>   
        <Navbar />

        <article className="mx-7 mb-32 md:mx-16 lg:mx-20 xl:mx-72">
            <h1 className="text-4xl mt-16 font-bold xl:text-5xl ">{props.heading}</h1>

            <section>{props.svgStar}</section>

            <p className="mt-14 md:mr-20 lg:mr-80 lg:mt-10">{props.description}</p>

            <section className="">
                <img className="mt-12 h-96 w-full object-fill lg:w-auto lg:mt-9" src={props.image} alt="recipe-img" />
            </section>

            <h2 className="mt-24 text-3xl font-bold">Ingredients</h2>

            <ul className="mt-12 text-gray-800">
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

            <section>
                <h5 className="description-step">Step 1</h5>
                <p className="step-paragraph">{props.step1}</p>
            </section>

            <section>
                <h5 className="description-step">Step 2</h5>
                <p className="step-paragraph">{props.step2}</p>
            </section>

            <section>
                <h5 className="description-step">Step 3</h5>
                <p className="step-paragraph">{props.step3}</p>
            </section>

            <section>
                <h5 className="description-step">Step 4</h5>
                <p className="step-paragraph">{props.step4}</p>
            </section>

        </article>

        <Footer />
    </section>
}

export default MiniRecipesDescription