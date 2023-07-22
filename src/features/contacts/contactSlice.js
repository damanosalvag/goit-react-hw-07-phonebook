import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [
    { id: "id-1", name: "Rosie Simpson", phone: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", phone: "443-89-12" },
  ],
  filter: "",
};

export const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.list.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.list = state.list.filter(
        (contact) => contact.id !== action.payload
      );
    },
    filterContact: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addContact, deleteContact, filterContact } =
  contactsSlice.actions;
export default contactsSlice.reducer;
