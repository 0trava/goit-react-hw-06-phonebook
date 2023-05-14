

import { configureStore } from "@reduxjs/toolkit";
import { tasksReducer } from "./tasksContacts";
import { filtersReducer } from "./filterContacts";


export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filters: filtersReducer,
  },
});