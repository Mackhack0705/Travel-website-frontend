import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    hotelSelect: true,
}

export const hotelSlice = createSlice({
    name: 'hotel',
    initialState,
    reducers: {
        setHotel: (state,actions) => {
            state.hotelSelect = actions.payload
        },
    }
})

export const {setHotel} = hotelSlice.actions

export default hotelSlice.reducer