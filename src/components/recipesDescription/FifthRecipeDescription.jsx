// Description of the fifth recipe

import React from "react";
import MiniRecipesDescription from "./MiniRecipesDescription";
import SVGStar from "../SVGStar";

function FifthRecipeDescription() {
    return <div>
        <MiniRecipesDescription 
        
            heading="Salmon Tacos with Mango Salsa"

            svgStar={<SVGStar />}

            description="Grilled salmon wrapped up in a small tortilla, topped with peach-mango salsa, shredded cabbage, avocado, and a special sauce."

            image="/pics/descriptionRecipes/fifthDescription.PNG"

            list1="3 mangoes, diced"

            list2="2 peaches, diced"

            list3="½ lime, juiced, or more to taste"

            list4="⅛ teaspoon ground cayenne pepper"

            list5="3 tablespoons mayonnaise"

            list6="1 tablespoon ketchup"

            list7="salt and ground black pepper to taste"

            list8="2 pounds fresh salmon"

            list9="1 small head cabbage, shredded"

            list10="3 avocados, sliced"

            step1="Combine mangoes, peaches, poblano peppers, red onion, juice of 1/2 a lime, and 1/2 the cilantro in a large bowl to make mango salsa. Cover with plastic wrap and refrigerate, at least 1 hour, preferably overnight."

            step2="Mix sour cream, mayonnaise, ketchup, cayenne pepper, salt, and black pepper in a small bowl to make special sauce. Heat tortillas in the preheated oven until warmed through, about 5 minutes."

            step3="Preheat a grill pan over medium-high heat; coat with cooking spray. Cook salmon until easily flaked with a fork, about 4 minutes per side. Transfer to a plate and flake into smaller pieces with a fork."

            step4="Divide salmon among tortillas. Top with mango salsa, special sauce, shredded cabbage, avocados, and remaining cilantro. Wrap up tacos and serve lime wedges alongside."
        />
    </div>
}

export default FifthRecipeDescription