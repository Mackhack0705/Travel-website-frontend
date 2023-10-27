import { configureStore, combineReducers } from '@reduxjs/toolkit'
import searchReducer from '../feature/searchSlice'
import flightReducer from '../feature/flightSlice'
import hotelReducer from '../feature/hotelSlice'

export const store = configureStore({
    reducer: combineReducers({
        search: searchReducer,
        flight: flightReducer,
        hotel: hotelReducer,
    }),

});