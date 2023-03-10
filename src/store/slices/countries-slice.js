import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  countries: [],
  status: null,
  error: null,
};

const setError = (state, action) => {
  state.status = "rejected";
  state.error = action.payload;
};

// Thunk
export const fetchCountries = createAsyncThunk(
  "countries/fetchCountries",
  async function (_, { rejectWithValue }) {
    try {
      const response = await fetch(
        "https://restcountries.com/v3/all?fields=name,flags"
      );
      if (!response.ok) {
        throw new Error("server error");
      }
      const data = await response.json();
      return data;
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
      state.countries = action.payload;
    },
    [fetchCountries.rejected]: setError,
  },
});
export const countriesActions = countriesSlice.actions;
export default countriesSlice;
