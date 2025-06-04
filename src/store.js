import { configureStore } from "@reduxjs/toolkit";
import userAuthSlice from './features/userAuth'

export const store = configureStore({
    reducer:{
        userAuth:userAuthSlice
    }
})