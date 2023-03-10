import { configureStore } from "@reduxjs/toolkit";
import countriesSlice from "./slices/countries-slice";
import countrySlice from "./slices/country-slice";

const store = configureStore({
  reducer: {
    countries: countriesSlice.reducer,
    country: countrySlice.reducer,
  },
});

export default store;
