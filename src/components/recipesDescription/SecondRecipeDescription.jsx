// Description of the second recipe

import React from "react";
import MiniRecipesDescription from "./MiniRecipesDescription";
import SVGStar from "../SVGStar";

function SecondRecipeDescription() {
    return <div>
        <MiniRecipesDescription 
        
            heading="Spicy Baked Shrimp"

            svgStar= {<SVGStar />}

            description="These spicy baked shrimp are made with a perfect blend of spices! So easy and quick to make!"

            image="/pics/descriptionRecipes/secondDescription.PNG"

            list1="½ cup olive oil"

            list2="2 tablespoons Cajun seasoning"

            list3="2 tablespoons lemon juice"

            list4="1/4 teaspoon kosher salt"

            list5="2 tablespoons chopped fresh parsley"

            list6="1 tablespoon honey"

            list7="1 tablespoon soy sauce"

            list8="1 pinch cayenne pepper"

            list9="1 pound uncooked shrimp, peeled and deveined"

            list10="cooking spray"

            step1="Whisk olive oil, Cajun seasoning, lemon juice, parsley, honey, soy sauce, and cayenne pepper together in a large glass or ceramic bowl. Add shrimp and toss to evenly coat. Cover the bowl with plastic wrap and marinate in the refrigerator for 1 hour."

            step2="Preheat the oven to 450 degrees F (230 degrees C). Spray a baking dish with cooking spray."

            step3="Transfer shrimp into the prepared baking dish and pour any remaining marinade over top."

            step4="Bake in the preheated oven until shrimp are bright pink on the outside and the meat is opaque, about 10 minutes."
        />
    </div>
}

export default SecondRecipeDescription