import { configureStore } from '@reduxjs/toolkit'
import countryRecipesReducer from "./countryRecipesSlice"

export default configureStore({
  reducer: {
    countryRecipes: countryRecipesReducer
  },
})