import { useSelector } from "react-redux";

export const useMarkers = () => useSelector((state) => state.markers.markers);
