import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCountriesData } from "../../http/countriesApi";

const initialState = {
  countries: [],
  status: null,
  error: null,
};

// Thunk
export const fetchCountries = createAsyncThunk(
  "countries/fetchCountries",
  async function (_, { rejectWithValue }) {
    try {
      return getCountriesData();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const countriesSlice = createSlice({
  name: "countries",
  initialState: initialState,
  reducers: {
    setCountries(state, action) {
      state.countries = action.payload;
    },
  },
  extraReducers: {
    [fetchCountries.pending]: state => {
      state.status = "loading";
      state.error = null;
    },
    [fetchCountries.fulfilled]: (state, action) => {
      state.status = "success";
      state.countries = action.payload || [];
    },
    [fetchCountries.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.error || null;
    },
  },
});
export const countriesActions = countriesSlice.actions;
export default countriesSlice;
