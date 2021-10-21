import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
export const addIngredient = createAsyncThunk('ingredients/addIngredient',async(info)=>{
  const { data } = await axios.post('http://localhost:5000/ingredients/addingredient',{...info})
  return data
})

const ingredient = createSlice({
  name:'ingredients',
  initialState:{ingredient:{}},
  extraReducers: {
    [addIngredient.pending]:(state)=>{},
    [addIngredient.fulfilled]:(state,action)=>{
      state.ingredient = action.payload
    },
    [addIngredient.rejected]:(state)=>{}
  }
})
export default ingredient.reducer