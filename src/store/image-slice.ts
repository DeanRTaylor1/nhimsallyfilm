import { createSlice } from "@reduxjs/toolkit";

export interface ImageProps {
  name: string;
}

const initialImageState: ImageProps = {
  name: "personal1",
};

const imageSlice = createSlice({
  name: "imagename",
  initialState: initialImageState,
  reducers: {
    setCurrentImage(state, action) {
      state.name = action.payload.imageName;
    },
  },
});

export const userActions = imageSlice.actions;

export default imageSlice;
