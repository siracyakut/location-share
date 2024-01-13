import GoogleMapReact from "google-map-react";
import { darkTheme, lightTheme } from "~/constants/map-themes";
import PropTypes from "prop-types";

export default function Map({ children }) {
  const mapDefaults = {
    center: {
      lat: 39.5,
      lng: 33,
    },
    zoom: 7,
  };

  return (
    <div className="w-full h-full">
      <GoogleMapReact
        bootstrapURLKeys={{ key: import.meta.env.VITE_GOOGLE_KEY }}
        defaultCenter={mapDefaults.center}
        defaultZoom={mapDefaults.zoom}
        options={{ styles: darkTheme }}
      >
        {children}
      </GoogleMapReact>
    </div>
  );
}

Map.propTypes = {
  children: PropTypes.node,
};
