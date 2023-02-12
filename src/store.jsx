import { configureStore } from "@reduxjs/toolkit";
import projectSlice from "./features/projectsSlice/projectSlice";


export const store = configureStore({
    reducer: {
        project: projectSlice,
    },
})