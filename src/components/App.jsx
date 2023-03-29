// Home page of the website

import React from 'react'
import { useState } from 'react'
import Title from './Title'
import Countries from './Countries'
import CountryRecipes from './CountryRecipes'
import LatestRecipes from "./LatestRecipes"

function App() {

  const [resultRecipes, setResultRecipes] = useState([])   // State that contains the data of the country recipes
  const [countryRecipesShown, setCountryRecipesShown] = useState(false)

  return (
    <div>

      <Title />

      <Countries
        setResultRecipes={setResultRecipes}
        setCountryRecipesShown={setCountryRecipesShown}
      />

      {countryRecipesShown && resultRecipes ? resultRecipes.map((value) => <CountryRecipes 
        recipeImage={value.strMealThumb}
        recipeName={value.strMeal}
      />) : null}

      <LatestRecipes />

    </div>
  )
}

export default App
