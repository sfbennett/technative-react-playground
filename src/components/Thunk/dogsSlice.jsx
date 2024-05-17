import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchRandomDogImage = createAsyncThunk(
  "randomDog/fetchRandomDogImage",
  async () => {
    try {
      const apiURL = "https://api.thedogapi.com/v1/images/search?limit=10";
      const response = await fetch(apiURL);
      const data = await response.json();
      console.log(data);
      return data[0].url;
    } catch (error) {
      console.log("error " + error);
      throw error;
    }
  }
);

const initialState = {
  imageURL: "dogs/dog.jpg",
  loading: false,
  error: null,
};

// Create dogsSlice
const dogsSlice = createSlice({
  name: "randomDog",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRandomDogImage.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchRandomDogImage.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.imageURL = action.payload;
    });
    builder.addCase(fetchRandomDogImage.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const selectDogImage = (state) => state.randomDog.imageURL;
export default dogsSlice.reducer;
