import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  countries: {},
};

const countriesSlice = createSlice({
  name: "countries",
  initialState: initialState,
  reducers: {
    setCountries(state, action) {
      state.countries = action.payload;
    },
  },
});
export const countriesActions = countriesSlice.actions;
export default countriesSlice;
