import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    searchData: [],
}

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        flightSearch: (state, action) => {
            const filteredData = action.payload;

            state.searchData = [];

            state.searchData = filteredData.length > 0 ? filteredData : [];
        },
        hotelSearch: (state, action) => {
            const filteredData = action.payload; 
            
            state.searchData = [];

            state.searchData = filteredData.length > 0 ? filteredData : [];
        },
        resetSearch: (state,action) => {
            state.searchData = action.payload;
        },
    }
})


export const { flightSearch, hotelSearch, resetSearch } = searchSlice.actions

export default searchSlice.reducer