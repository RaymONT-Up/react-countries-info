import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  country: {},
};

const countrySlice = createSlice({
  name: "country",
  initialState: initialState,
  reducers: {
    setCountry(state, action) {
      state.countries = action.payload;
    },
  },
});
export const countryActions = countrySlice.actions;
export default countrySlice;
