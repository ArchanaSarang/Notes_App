import { configureStore } from "@reduxjs/toolkit";
import noteReducer from "./redux/notesSlice";

export const store = configureStore({
    reducer:{
        note: noteReducer,
    }
});