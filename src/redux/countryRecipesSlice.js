import { createSlice } from '@reduxjs/toolkit'

export const countryRecipesSlice = createSlice({
  name: 'countryRecipes',
  initialState: {
    value: [],
  },
 reducers: {
  countryRecipes: (state, action) => {
    state.value = action.payload
  }
 }
})

export const { countryRecipes } = countryRecipesSlice.actions
export default countryRecipesSlice.reducer