import { createSlice } from "@reduxjs/toolkit";
import { operations } from "../../app/operations";

const initialState = {
  list: [],
  filter: "",
  isLoading: false,
  error: null,
};
const { getContacts, addContact, deleteContact } = operations;

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    filterContact: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getContacts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.list = action.payload;
      })
      .addCase(getContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addContact.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addContact.fulfilled, (state) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteContact.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteContact.fulfilled, (state) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { filterContact } = contactsSlice.actions;
export default contactsSlice.reducer;
