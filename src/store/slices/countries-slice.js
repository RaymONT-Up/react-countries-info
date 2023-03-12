import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCountriesData } from "../../http/countriesApi";

const initialState = {
  countries: [],
  status: null,
  error: null,
};

// Thunk
export const getCountries = createAsyncThunk(
  "countries/getCountries",
  async function (_, { rejectWithValue }) {
    try {
      return fetchCountriesData();
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
    [getCountries.pending]: state => {
      state.status = "loading";
      state.error = null;
    },
    [getCountries.fulfilled]: (state, action) => {
      state.status = "success";
      state.countries = action.payload || [];
    },
    [getCountries.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.error || null;
    },
  },
});
export const countriesActions = countriesSlice.actions;
export default countriesSlice;
