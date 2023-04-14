// Home page of the website

import React from 'react'
import { useState } from 'react'
import Navbar from './Navbar'
import Title from './Title'
import Countries from './Countries'
import CountryRecipes from './CountryRecipes'
import LatestRecipes from "./LatestRecipes"
import Footer from './Footer'

function App() {

  const [resultRecipes, setResultRecipes] = useState([])   // State that contains the data of the country recipes

  return (
    <main>

      <Navbar />

      <Title />

      <Countries
        setResultRecipes={setResultRecipes}
      />

      {resultRecipes ? resultRecipes.map((value) => <CountryRecipes
        recipeImage={value.strMealThumb}
        recipeName={value.strMeal}
      />) : null}

      <LatestRecipes />

      <Footer />

    </main>
  )
}

export default App
