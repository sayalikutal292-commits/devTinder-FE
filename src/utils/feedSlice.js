import { createSlice } from "@reduxjs/toolkit";

const feedSlice = createSlice({
  name: "Feed",
  initialState: null,
  reducers: {
    addFeed: (state, action) => {
      return action.payload;
    },
  },
});

export const { addFeed } = feedSlice.actions;
export default feedSlice.reducer;
