import { createSlice } from '@reduxjs/toolkit';

//name is alias for the selector methods

const homeVideosSlice = createSlice({
  name: "homeVideosGrid",
  initialState: {
    videoData: [],
  },
  reducers: {
    setVideos(state, action) {
      state.videoData = action.payload;
      console.log(state.videoData);
    }
  },
});

export const { setVideos} = homeVideosSlice.actions;
export default homeVideosSlice.reducer;