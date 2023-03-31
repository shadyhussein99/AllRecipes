// Component used to structure the About page

import React from "react";

function MiniAbout(props) {
    
    return <div id={props.id}>

        <h3>{props.heading}</h3>

        <p>{props.firstParagraph}</p>

        <p>{props.secondParagraph}</p>

    </div>
}

export default MiniAbout