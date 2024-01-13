import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  markers: [],
};

const markers = createSlice({
  name: "markers",
  initialState,
  reducers: {
    _setMarkers: (state, action) => {
      state.markers = action.payload;
    },
    _addMarker: (state, action) => {
      state.markers = [...state.markers, action.payload];
    },
    _removeMarker: (state, action) => {
      state.markers = state.markers.filter(
        (marker) => marker.userName !== action.payload,
      );
    },
  },
});

export const { _addMarker, _removeMarker, _setMarkers } = markers.actions;
export default markers.reducer;
