import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchWeatherAction = createAsyncThunk(
  "weather/fetch",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${payload}&units=metric&appid=${process.env.REACT_APP_OPEN_WEATHER_KEY}`
      );
      return data;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);
