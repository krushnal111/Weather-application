import { configureStore, createSlice } from "@reduxjs/toolkit";
import { fetchWeatherAction } from "../actionCreator/Weather-API";

const weatherSlice = createSlice({
  name: "Weather-APP",
  initialState: { weather: null, loading: true, error: null },
  extraReducers: (builder) => {
    builder.addCase(fetchWeatherAction.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchWeatherAction.fulfilled, (state, action) => {
      state.weather = action.payload;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(fetchWeatherAction.rejected, (state, action) => {
      state.loading = false;
      state.weather = null;
      state.error = action.payload;
    });
  },
});

const store = configureStore({
  reducer: weatherSlice.reducer,
});
export default store;
