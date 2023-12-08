import {combineReducers} from "@reduxjs/toolkit";

import {IVerbGameSlice} from "@/entities/iVerbGame/model/slice.ts";

export const rootReducer = combineReducers({
    [IVerbGameSlice.name]: IVerbGameSlice.reducer,
})
