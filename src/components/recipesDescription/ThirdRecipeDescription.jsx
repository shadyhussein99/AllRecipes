// Description of the third recipe

import React from "react";
import MiniRecipesDescription from "./MiniRecipesDescription";
import SVGStar from "../SVGStar";

function ThirdRecipeDescription() {
    return <div>
        <MiniRecipesDescription 
        
            heading="Easy Korean Ground Beef Bowl"

            svgStar= {<SVGStar />}

            description="This Korean beef bowl is quick and easy to make. The ingredients can easily be adjusted to suit your taste. Serve over warm rice or spiralized vegetables."

            image="/pics/descriptionRecipes/thirdDescription.PNG"

            list1="1 pound lean ground beef"

            list2="5 cloves garlic, crushed"

            list3="1 tablespoon freshly grated ginger"

            list4="2 teaspoons toasted sesame oil"

            list5="½ cup reduced-sodium soy sauce"

            list6="⅓ cup light brown sugar"

            list7="¼ teaspoon crushed red pepper"

            list8="6 green onions, chopped, divided"

            list9="4 cups hot cooked brown rice"

            list10="1 tablespoon toasted sesame seeds"

            step1="Heat a large skillet over medium-high heat. Add beef and cook, stirring and crumbling into small pieces until browned, 5 to 7 minutes. Drain excess grease."

            step2="Stir in garlic, ginger, and sesame oil and cook until fragrant, about 2 minutes. Stir in soy sauce, brown sugar, and red pepper."

            step3="Cook until beef absorbs some sauce, about 7 minutes. Add 1/2 of chopped green onions."

            step4="Serve over hot cooked rice; garnish with sesame seeds and remaining green onions."
        />
    </div>
}

export default ThirdRecipeDescription