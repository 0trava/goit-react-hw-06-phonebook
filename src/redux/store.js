import { configureStore } from "@reduxjs/toolkit";
import { tasksReducer } from "./tasksContacts";
import { filtersReducer } from "./filterContacts";

// ВИВІД ІНФОРМАЦІЇ у консоль REDUX
export const store = configureStore({
  reducer: {
    contacts: tasksReducer,
    filter: filtersReducer,
  },
});