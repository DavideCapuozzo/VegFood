import { configureStore } from '@reduxjs/toolkit'
import { apiReducer } from '../store/apiSlice'

export default configureStore({
    reducer:{
        api: apiReducer,
    },
})