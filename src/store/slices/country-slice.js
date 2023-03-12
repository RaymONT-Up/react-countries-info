import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchCountryData } from "../../http/countryApi.js";

const initialState = {
  country: {},
  countryCode: null,
  status: null,
  error: null,
};

export const getCountry = createAsyncThunk(
  "country/getCountry",
  async function (countryCode, { rejectWithValue }) {
    try {
      return fetchCountryData(countryCode);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const countrySlice = createSlice({
  name: "country",
  initialState: initialState,
  reducers: {
    setCountry(state, action) {
      state.countries = action.payload;
    },
  },
  extraReducers: {
    [getCountry.pending]: state => {
      state.status = "loading";
      state.error = null;
    },
    [getCountry.fulfilled]: (state, action) => {
      state.status = "success";
      state.country = action.payload || {};
    },
    [getCountry.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.error || null;
    },
  },
});
export const countryActions = countrySlice.actions;
export default countrySlice;
