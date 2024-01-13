import store from "~/store";
import { _addMarker, _removeMarker, _setMarkers } from "~/store/markers";

export const setMarkers = (data) => store.dispatch(_setMarkers(data));
export const addMarker = (data) => store.dispatch(_addMarker(data));
export const removeMarker = (data) => store.dispatch(_removeMarker(data));
