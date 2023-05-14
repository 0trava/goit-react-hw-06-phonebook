import { createSlice, nanoid } from "@reduxjs/toolkit";

  // ДАННІ - для першого завантаження
  const initialContacts = [
    { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
    { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
    { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
    { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
  ];

const tasksSlice = createSlice({

  name: "tasks",
  initialState: initialContacts,

  reducers: {
    addContacts: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(text) {
        return {
          payload: {
            id: nanoid(),
            text,
          },
        };
      },
    },

    deleteContacts(state, action) {
      const index = state.findIndex(cont => cont.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const { addContacts, deleteContacts } = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;