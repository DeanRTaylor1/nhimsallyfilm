import { configureStore } from "@reduxjs/toolkit";

import imageSlice from "./image-slice";

export interface RootState {
  image: {
    imagename: string;
  };
}

const store = configureStore({
  reducer: { image: imageSlice.reducer },
});

export default store;
