import { createSlice } from "@reduxjs/toolkit";

export const apiSlice = createSlice({
    name: 'api',
    initialState:{
        value: []
    },
    reducers:{
        addSearch:(state, action) => {
            state.value.push(action.payload);
            console.log('sono in slice api', apiSlice)
        },
        removeSearch:(state) =>{
            state.value = [];
        }
    }
})

export const { addSearch, removeSearch } = apiSlice.actions

export const apiReducer = apiSlice.reducer
