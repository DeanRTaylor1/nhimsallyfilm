import { createSlice } from "@reduxjs/toolkit";

export interface ImageProps {
  imagename: string;
}

const initialImageState: ImageProps = {
  imagename: "personal1",
};

const imageSlice = createSlice({
  name: "imagename",
  initialState: initialImageState,
  reducers: {
    setCurrentImage(state, action) {
      state.imagename = action.payload.imagename;
    },
  },
});

export const imageActions = imageSlice.actions;

export default imageSlice;
