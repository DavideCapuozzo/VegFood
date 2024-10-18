import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBookmark } from '../interface/Interface'; 

interface ApiState {
    value: IBookmark[][]; 
}

const initialState: ApiState = {
    value: [],
};

export const apiSlice = createSlice({
    name: 'api',
    initialState,
    reducers: {
        addSearch: (state, action: PayloadAction<IBookmark[]>) => {
            state.value.push(action.payload); 
            console.log('sono in slice api', apiSlice);
        },
        
        removeSearch: (state) => {
            state.value = [];
        },
    },
});

export const { addSearch, removeSearch } = apiSlice.actions;
export const apiReducer = apiSlice.reducer;
