import { configureStore } from '@reduxjs/toolkit';
import homeVideosGridReducer from'./homeVideosSlice.js'

const appStore = configureStore({
    //Slices Go here
    reducer: {
        homeVideosGrid:homeVideosGridReducer,
    }
});

export default appStore;