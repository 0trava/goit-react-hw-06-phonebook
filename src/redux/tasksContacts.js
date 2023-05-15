import { createSlice, nanoid } from "@reduxjs/toolkit";

  const CONTACTS = 'contacts'; // ключ для localStorage
  // ДАННІ - для першого завантаження
  const initialContacts = [
    { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
    { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
    { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
    { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
  ];
  
  const startWork = (JSON.parse(window.localStorage.getItem(CONTACTS)) ?? initialContacts); // якщо в localStorage є контакти, то використовуємо їх, якщо ні, то використовуємо початковий масив

const tasksSlice = createSlice({

  name: "tasks",
  initialState: startWork,

  reducers: {
    addContacts: {
      reducer(state, action) {
        state.push(action.payload);
        window.localStorage.setItem(CONTACTS, JSON.stringify(state));
      },
        prepare(nameAdd, numberAdd) {
            console.log(nameAdd, numberAdd);
            return {
              payload: {
                id: nanoid(),
                name: nameAdd,
                number: numberAdd,
              },
            };
          },
        },

    deleteContacts(state, action) {
      const index = state.findIndex(cont => cont.id === action.payload);
      state.splice(index, 1);
      window.localStorage.setItem(CONTACTS, JSON.stringify(state));
    },
  },
});

export const { addContacts, deleteContacts } = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;