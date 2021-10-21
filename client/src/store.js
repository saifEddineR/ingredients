import {configureStore} from '@reduxjs/toolkit'
import ingredientReducer from './redux/ingredientSlice'

export default  configureStore({reducer:{ingredient:ingredientReducer}})