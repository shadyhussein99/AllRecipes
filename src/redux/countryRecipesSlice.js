import { createSlice } from '@reduxjs/toolkit'

export const countryRecipesSlice = createSlice({
  name: 'countryRecipes',
  initialState: {
    value: [],
  },
  reducers: {
    countryRecipesData: (state) => {
      state.value = []
    },
  },
})

export const { countryRecipesData } = countryRecipesSlice.actions

export default countryRecipesSlice.reducer