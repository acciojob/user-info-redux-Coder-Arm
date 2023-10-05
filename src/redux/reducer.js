
import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
    name : 'data',
    initialState: {
        name : '',
        email : ''
    },
    reducers : {
        dataNameFn(state,action){
           state.name = action.payload
        },
        dataMailFn(state,action){
            state.email=action.payload
        }
    }
})

export const {dataNameFn,dataMailFn} = dataSlice.actions;
export default dataSlice.reducer;