// Component used to structure the About page

import React from "react";

function MiniAbout(props) {

    return <div id={props.id} className="mt-10">

        <h3 className="text-orange-600 text-3xl font-bold mb-6">{props.heading}</h3>

        <p className="mb-4">{props.firstParagraph}</p>

        <p>{props.secondParagraph}</p>

    </div>
}

export default MiniAbout