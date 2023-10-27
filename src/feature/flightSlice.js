import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    flightSelect: false,
}

export const flightSlice = createSlice({
    name: 'flight',
    initialState,
    reducers: {
        setFlight: (state,actions) => {
            state.flightSelect = actions.payload
        },
    }
})

export const {setFlight} = flightSlice.actions

export default flightSlice.reducer