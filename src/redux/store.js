import { configureStore } from "@reduxjs/toolkit";
import dataSlice from './reducer'
const store = configureStore({
    reducer : {
        data : dataSlice
    }
})

export default store