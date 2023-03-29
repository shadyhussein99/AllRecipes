import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

 export const fetchCountryRecipes = createAsyncThunk("countryRecipes/fetchCountryRecipes", async (_, thunkAPI) => {
  const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=egyptian`);
  const data = await res.json();
  const { meals } = data
  .catch((error) => console.log(error))
})

export const countryRecipesSlice = createSlice({
  name: 'countryRecipes',
  initialState: {
    value: [],
  },
  extraReducers: (builder) =>{
    builder.addCase(fetchCountryRecipes.fulfilled, (state, action) => {
      console.log(action);
    })
  }
})


export default countryRecipesSlice.reducer