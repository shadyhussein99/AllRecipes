// About page of the website

import React from "react";
import Navbar from "./Navbar";
import MiniAbout from "./MiniAbout";

function About() {
    return <div>

        <Navbar />

        <div>
            <div>
                <h5>In this article</h5>

                <a>About AllRecipes</a>
                <a>AllRecipes Magazine</a>
                <a>AllRecipes Community</a>
                <a>Community Guidelines</a>
                <a>Diversity and Inclusion</a>
                <a>Editorial Guidelines</a>
            </div>

            <div>

                <h2>About Us</h2>

                <MiniAbout 
                    id="AboutAllRecipes"
                    heading="Who We Are"
                    firstParagraph="Home cooks are our heroes—it's as simple as that. Allrecipes is a community built by and for kitchen experts: The cooks who will dedicate the weekend to a perfect beef bourguignon but love the simplicity of a slow-cooker rendition, too. The bakers who labor over a showstopping 9-layer cake but will just as happily doctor boxed brownies for a decadent weeknight dessert. The entertainers who just want a solid snack spread, without tons of dirty dishes at the end of the night."
                    secondParagraph="Most importantly, Allrecipes connects home cooks with their greatest sources of inspiration — other home cooks. We're the world's leading digital food brand, and that inspires us to do everything possible to keep our community connected. Sixty-million home cooks deserve no less."
                />

                <MiniAbout 
                    id="AllRecipesMagazine"
                    heading="All Recipes Magazine"
                    firstParagraph="The food industry's first large-scale digital-to-print brand extension, Allrecipes magazine launched in 2013. Now published six times a year, it reaches an audience of nearly 9 million."
                    secondParagraph="The magazine serves up a seasonal slice of recipes and real-cook wisdom from Allrecipes.com — along with the best of what's new from the greater food and cooking community (emerging trends, entertaining ideas, new products, and more). We aim for a mix of approachable inspiration and down-to-earth service in every issue."
                />

                <MiniAbout 
                    id="AllRecipesCommunity"
                    heading="The AllRecipes Community"
                    firstParagraph="The heart of Allrecipes is our community of home cooks who share their beloved family recipes, create new recipes, and photograph, rate, and review each other's recipes."
                    secondParagraph="Each week, more than 15 million registered members add more than 2,000 recipe ratings, 800 new recipe photos, and almost 200 new recipes to the site. And every minute of every day, 27 people are saving recipes they love or want to try later."
                />

                <MiniAbout 
                    id="CommunityGuidelines"
                    heading="Community Guidelines"
                    firstParagraph="We moderate every review and photograph added to a recipe. When leaving reviews, we ask that you remember that a fellow Allrecipes community member has shared their recipe with you."
                    secondParagraph="Constructive feedback is always welcome, but rude, mean, disrespectful, or spammy comments are not welcome and will not be approved."
                />

                <MiniAbout 
                    id="DiversityAndInclusion"
                    heading="Diversity and Inclusion"
                    firstParagraph="Allrecipes is and always has been a community built around love. We are people who love food, love to cook, and love to share recipes and stories. There is no room for hate, racism, or inequality in our community. The 60 million cooks who make up the Allrecipes audience are extraordinarily diverse. We strive to celebrate the home cooks who bring Allrecipes to life, featuring them on the website and in the pages of Allrecipes magazine."
                    secondParagraph="We are committed to the goal of having contributors, featured cooks, featured recipes, and stories reflect the diversity of the Allrecipes community in our digital properties and in the magazine—and know that we still have much work to do. "
                />

                <MiniAbout 
                    id="EditorialGuidelines"
                    heading="Editorial Guidelines"
                    firstParagraph="At Allrecipes, we take great pride in the quality of our content. Our writers, photographers, and editors create original, accurate, and engaging content that reflects the interests and concerns of home cooks, and our recipe editors verify all user submissions before publication. "
                    secondParagraph="Original illustrations, graphics, images, and videos are created by internal teams who collaborate with experts in their fields to produce assets that represent diverse voices, perspectives, and contexts. Photos and videos are not edited in any way that may cause them to be false or misleading."
                />
                
            </div>
        </div>
    </div>
}

export default About